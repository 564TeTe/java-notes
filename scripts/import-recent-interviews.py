"""Import the supplied recent-interview Markdown as data, keeping existing answers."""
import argparse
import copy
import json
import re
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

PREFIX = 'window.QUESTION_BANK_DATA = '
COMPANY_ALIASES = {'阿里（千问／飞猪）': '阿里'}


def sections(text):
    current, lines, fence = None, [], None
    for line in text.splitlines():
        marker = re.match(r'^\s*(`{3,}|~{3,})', line)
        if marker:
            if fence is None:
                fence = marker[1][0]
            elif marker[1][0] == fence:
                fence = None
        heading = re.match(r'^(#{1,4}) (.+)$', line) if fence is None else None
        if heading:
            if current:
                yield (*current, '\n'.join(lines))
            current, lines = (len(heading[1]), heading[2]), []
        else:
            lines.append(line)
    if fence:
        raise ValueError('Unclosed code fence')
    if current:
        yield (*current, '\n'.join(lines))


def parse(text):
    expected = {m[1].strip(): (int(m[2]), int(m[3])) for m in re.finditer(
        r'^\| ([^|]+) \| (\d+) \| (\d+) \| \[打开\]', text, re.M)}
    questions, sources, memberships = {}, {}, {}
    company = category = None
    for level, title, body in sections(text):
        if level == 1:
            company = title.split('｜', 1)[0] if '｜近期面经与直白回答' in title else None
            category = None
            if company:
                memberships.setdefault(company, set())
        source = re.fullmatch(r'(NI\d{3}) · (.+)', title) if level == 3 else None
        if source and company:
            sid, source_title = source.groups()
            url = re.search(r'^原帖：\[[^\]]+\]\((https?://[^\s)]+)\)', body, re.M)
            if not url or sid in sources:
                raise ValueError(f'Missing or duplicate source: {sid}')
            description = '\n'.join(line.strip() for line in body.splitlines()
                                    if line.strip() and not line.startswith('原帖：'))
            sources[sid] = dict(id=sid, company=COMPANY_ALIASES.get(company, company),
                                title=f'{company} · {source_title}', url=url[1],
                                description='检索日：2026-09-13。考点重组，非现场逐字题单；答案为复习参考。\n' + description,
                                questionIds=[])
        elif level == 3 and company:
            category = title
        question = re.fullmatch(r'([A-Z]+[\d-]+) · (.+)', title) if level == 4 else None
        if not question:
            continue
        number, question_title = question.groups()
        metadata = re.search(r'^优先级：(P[012])｜([^｜]+)｜相关面经：([^\n]+)', body, re.M)
        if not company or not category or not metadata:
            raise ValueError(f'Missing question metadata: {number}')
        refs = set(re.findall(r'\[(NI\d{3})\]', metadata[3]))
        answer = re.sub(r'^\s*<a id="[^"]+"></a>\s*$', '', body[metadata.end():], flags=re.M).strip()
        answer = re.sub(r'\n---\s*$', '', answer).strip()
        if not refs or not answer or answer.count('```') % 2:
            raise ValueError(f'Missing source, answer, or code fence: {number}')
        entry = dict(id='bank-' + number, number=number, question=question_title,
                     answer=answer, category=category, priority=metadata[1],
                     kind='面经具体追问 / 练习', sourceIds=sorted(refs),
                     keywords=[number, category], sourceFile='recent-interviews-study.md')
        if number in questions:
            old = questions[number]
            if any(old[key] != entry[key] for key in ('question', 'answer', 'category', 'priority')):
                raise ValueError(f'Conflicting repeated question: {number}')
            old['sourceIds'] = sorted(set(old['sourceIds']) | refs)
        else:
            questions[number] = entry
        memberships[company].add(entry['id'])
    if not expected or set(expected) != set(memberships):
        raise ValueError('Company index does not match parsed groups')
    for q in questions.values():
        for sid in q['sourceIds']:
            if sid not in sources:
                raise ValueError(f'Unknown source {sid}')
            sources[sid]['questionIds'].append(q['id'])
    for group, ids in memberships.items():
        group_sources = [s for s in sources.values() if s['company'] == COMPANY_ALIASES.get(group, group)]
        actual = (len(group_sources), len(ids))
        linked = {qid for s in group_sources for qid in s['questionIds']}
        if actual != expected[group] or linked != ids:
            raise ValueError(f'Company membership mismatch: {group}: {actual}')
    return questions, sources, memberships


def normalized_url(url):
    parts = urlsplit(url)
    return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path.rstrip('/'), parts.query, ''))


def merge(base, incoming, sources, memberships):
    result = copy.deepcopy(base)
    existing = {q['number']: q for q in result['questions']}
    categories = {q['category'] for q in result['questions']}
    source_by_id = {s['id']: s for s in result['sources']}
    source_by_url = {normalized_url(s['url']): s for s in result['sources']}
    aliases, added_sources = {}, 0
    for sid, source in sorted(sources.items()):
        old = source_by_id.get(sid) or source_by_url.get(normalized_url(source['url']))
        if old:
            if normalized_url(old['url']) != normalized_url(source['url']) or old['company'] != source['company']:
                raise ValueError(f'Source collision: {sid}')
            old['questionIds'] = list(dict.fromkeys(old['questionIds'] + source['questionIds']))
            aliases[sid] = old['id']
        else:
            record = copy.deepcopy(source)
            result['sources'].append(record)
            source_by_id[sid] = source_by_url[normalized_url(source['url'])] = record
            aliases[sid] = sid
            added_sources += 1
    added = 0
    for number, incoming_question in sorted(incoming.items()):
        if incoming_question['category'] not in categories:
            raise ValueError(f'Unknown category: {number}')
        if number not in existing:
            if not re.fullmatch(r'RM\d{3}', number):
                raise ValueError(f'Unknown original question: {number}')
            existing[number] = copy.deepcopy(incoming_question)
            existing[number]['sourceIds'] = []
            result['questions'].append(existing[number])
            added += 1
        q = existing[number]
        q['sourceIds'] = list(dict.fromkeys(q['sourceIds'] + [aliases[s] for s in incoming_question['sourceIds']]))
        companies = [source_by_id[s]['company'] for s in q['sourceIds']]
        q['keywords'] = list(dict.fromkeys(q.get('keywords', []) + companies))
    ids = [q['id'] for q in result['questions']]
    if len(ids) != len(set(ids)):
        raise ValueError('Duplicate question IDs')
    if any(qid not in set(ids) for s in result['sources'] for qid in s['questionIds']):
        raise ValueError('Unresolved question reference')
    report = dict(id='recent-interviews-2026-09-13', companies=len(memberships),
                  sources=len(sources), companyEntries=sum(map(len, memberships.values())),
                  uniqueCompanyQuestions=len(incoming),
                  questionIds=sorted(q['id'] for q in incoming.values()),
                  sourceIds=sorted(set(aliases.values())))
    result['supplements'] = [s for s in result.get('supplements', []) if s.get('id') != report['id']] + [report]
    return result, dict(added=added, addedSources=added_sources, linkedExisting=len(incoming) - added,
                        total=len(ids), sources=len(result['sources']),
                        companies={c: len(qids) for c, qids in memberships.items()})


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('document', type=Path)
    parser.add_argument('--bank', type=Path, default=Path('data/question-bank.js'))
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    base = json.loads(args.bank.read_text(encoding='utf-8-sig').removeprefix(PREFIX).rstrip(';\n'))
    parsed = parse(args.document.read_text(encoding='utf-8-sig'))
    result, report = merge(base, *parsed)
    (args.output or args.bank).write_text(PREFIX + json.dumps(result, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False))
