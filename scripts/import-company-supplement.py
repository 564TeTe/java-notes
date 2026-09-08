"""Merge company Markdown questions as data, preserving stable question IDs.

Read ZIP entries in memory; never extract paths or execute their contents.
"""
import argparse
import copy
import json
import re
import zipfile
from pathlib import Path

PREFIX = 'window.QUESTION_BANK_DATA = '
JX_CATEGORIES = {**dict.fromkeys([1, 2, 11, 12, 19], 'Java 基础'),
                 **dict.fromkeys([3, 4, 13, 14, 15, 16], 'JVM'),
                 **dict.fromkeys([5, 6, 7, 8, 9], '多线程 / 并发'),
                 10: 'Java 集合', 17: 'Spring / Spring Boot',
                 18: '场景题 / 故障排查', 20: '算法与数据结构'}


def sections(text):
    headings = list(re.finditer(r'^#{1,3} (.+)$', text, re.M))
    for i, match in enumerate(headings):
        yield match[1], text[match.end():headings[i+1].start() if i+1 < len(headings) else len(text)]


def parse_archive(path, categories):
    questions, sources, memberships, expected = {}, {}, {}, {}
    with zipfile.ZipFile(path) as archive:
        documents = [archive.read(n).decode('utf-8-sig') for n in archive.namelist() if n.endswith('.md')]
    for text in documents:
        company_match = re.match(r'# (.+)｜Java 后端面试题与答案', text)
        company = company_match[1] if company_match else None
        if company:
            memberships[company] = set()
        for line in text.splitlines():
            # Validate actual company membership counts against the archive's index.
            row = re.match(r'\| ([^|]+) \| (\d+) \| (\d+) \| \[', line)
            if row:
                expected[row[1].strip()] = int(row[2])
            # Six additional source records are supplied in the supplement table.
            row = re.match(r'\| (N\d+) \| \[([^]]+)\]\((https?://[^)]+)\) \| ([^|]+) \| (.+) \|', line)
            if row:
                sid, title, url, date, note = row.groups()
                sources[sid] = dict(id=sid, title=title, url=url, company=title.split(' · ')[0],
                                    description=f'{date.strip()}。{note.strip()}', questionIds=[])
        for heading, body in sections(text):
            source_match = re.match(r'(N\d+)｜(.+)', heading)
            if source_match:
                sid, title = source_match.groups()
                url = re.search(r'\*\*原帖：\*\* \[[^]]+\]\((https?://[^)]+)\)', body)
                if not url or not company:
                    raise ValueError(f'Missing source metadata: {sid}')
                description = '\n'.join(line.replace('**', '').strip() for line in body.splitlines()
                                        if line.startswith(('**日期与阶段', '**采集说明')))
                sources[sid] = dict(id=sid, title=f'{company} · {title}', url=url[1], company=company,
                                    description=description, questionIds=[])
                continue
            normal = re.match(r'(?:补充 )?\d+[.｜] ?(.+)', heading)
            extra = re.match(r'(JX\d{3})｜(.+)', heading)
            if not (normal or extra) or '**回答：**' not in body:
                continue
            number_match = re.search(r'\*\*题号：\*\* ((?:Q\d{2}-|JX)\d{3})', body)
            number = extra[1] if extra else number_match[1] if number_match else None
            if not number:
                raise ValueError(f'Missing question number: {heading}')
            title = extra[2] if extra else normal[1]
            answer = body.split('**回答：**', 1)[1]
            answer = re.sub(r'<a id="[^"]+"></a>', '', answer).strip()
            answer = re.sub(r'\n---\s*$', '', answer).strip()
            if not answer or answer.count('```') % 2:
                raise ValueError(f'Empty answer or broken code fence: {number}')
            refs = set(re.findall(r'\[(N\d+)\b', body.split('**回答：**', 1)[0]))
            kind = re.search(r'\*\*题目性质：\*\* ([^\n]+)', body)
            category = JX_CATEGORIES[int(number[2:])] if number.startswith('JX') else categories[number[1:3]]
            question = dict(id='bank-' + number, number=number, question=title, answer=answer,
                            category=category, priority='P1', kind=kind[1].rstrip('。') if kind else '面经考点改写 / 延展',
                            sourceIds=sorted(refs), keywords=[number, category], sourceFile='公司补充题库_2026-09-08')
            if number in questions:
                old = questions[number]
                if old['question'] != title:
                    raise ValueError(f'Conflicting title for {number}')
                question['sourceIds'] = sorted(refs | set(old['sourceIds']))
                # Shared Q entries repeat across companies; retain the fullest answer.
                # The dedicated JX chapter is authoritative for its detailed answers.
                if not extra and len(old['answer']) > len(answer):
                    question['answer'] = old['answer']
                if not refs:
                    question['kind'] = old['kind']
            questions[number] = question
            if company:
                memberships[company].add(question['id'])
    if len(expected) != 25 or {c: len(ids) for c, ids in memberships.items()} != expected:
        raise ValueError(f'Company counts differ: { {c:len(ids) for c,ids in memberships.items()} }')
    if len(sources) != 56:
        raise ValueError(f'Expected 56 sources, got {len(sources)}')
    for q in questions.values():
        for sid in q['sourceIds']:
            sources[sid]['questionIds'].append(q['id'])
    for company, ids in memberships.items():
        linked = {qid for s in sources.values() if s['company'] == company for qid in s['questionIds']}
        if ids != linked:
            raise ValueError(f'Company links differ: {company}: {ids ^ linked}')
    return questions, sources, memberships


def merge(base, questions, sources, memberships):
    result = copy.deepcopy(base)
    existing = {q['number']: q for q in result['questions']}
    added, enriched = 0, 0
    for number, incoming in sorted(questions.items()):
        if number not in existing:
            result['questions'].append(incoming)
            added += 1
        else:
            q = existing[number]
            if q['question'] != incoming['question']:
                raise ValueError(f'Existing ID/title collision: {number}')
            if len(incoming['answer']) > len(q['answer']):
                q['answer'] = incoming['answer']
                enriched += 1
            q['sourceIds'] = sorted(set(q['sourceIds']) | set(incoming['sourceIds']))
    old_sources = {s['id']: s for s in result['sources']}
    for sid, source in sorted(sources.items()):
        if sid in old_sources:
            if old_sources[sid]['url'] != source['url']:
                raise ValueError(f'Conflicting source: {sid}')
            old_sources[sid].update(source)
        else:
            result['sources'].append(source)
    company_by_source = {s['id']: s['company'] for s in result['sources']}
    for q in result['questions']:
        q['keywords'] = list(dict.fromkeys(q.get('keywords', []) + [company_by_source[s] for s in q['sourceIds']]))
    result['date'] = '2026-09-08'
    result['supplements'] = [dict(id='company-2026-09-08', companies=25, sources=56,
                                  companyEntries=sum(map(len, memberships.values())),
                                  uniqueCompanyQuestions=len(set.union(*memberships.values())),
                                  standaloneQuestions=sum(not q['sourceIds'] for q in questions.values()),
                                  questionIds=sorted(q['id'] for q in questions.values()))]
    return result, dict(added=added, enriched=enriched, total=len(result['questions']), sources=len(result['sources']))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    parser.add_argument('--bank', type=Path, default=Path('data/question-bank.js'))
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    base = json.loads(args.bank.read_text(encoding='utf-8').removeprefix(PREFIX).rstrip(';\n'))
    categories = {q['number'][1:3]: q['category'] for q in base['questions'] if q['number'].startswith('Q')}
    incoming, sources, memberships = parse_archive(args.archive, categories)
    result, report = merge(base, incoming, sources, memberships)
    target = args.output or args.bank
    target.write_text(PREFIX + json.dumps(result, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print(json.dumps(report))
