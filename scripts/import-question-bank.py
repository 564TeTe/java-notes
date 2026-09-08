"""Convert the supplied archive as data; never execute archive contents."""
import argparse
import json
import re
import zipfile
from pathlib import Path


def parse_archive(path):
    questions, sources = [], []
    with zipfile.ZipFile(path) as archive:
        for name in sorted(archive.namelist()):
            filename = name.split('/')[-1]
            if not re.match(r'(0[1-9]|1[0-3])_', filename):
                continue
            text = archive.read(name).decode('utf-8-sig')
            category = re.search(r'^# \d+｜(.+)', text, re.M).group(1).strip()
            matches = list(re.finditer(r'^### (Q\d{2}-\d{3})｜(.+)$', text, re.M))
            for i, match in enumerate(matches):
                body = text[match.end():matches[i + 1].start() if i + 1 < len(matches) else len(text)]
                body = re.sub(r'<a id="[^"]+"></a>', '', body).strip().rstrip('-').strip()
                priority = re.search(r'优先级：(P[012])', body).group(1)
                kind = re.search(r'题目类型：([^*]+)', body).group(1).strip()
                answer = re.split(r'\*\*回答：\*\*', body, maxsplit=1)[1].strip()
                if not answer:
                    raise ValueError(f'Empty answer: {match[1]}')
                questions.append(dict(id='bank-' + match[1], number=match[1], question=match[2],
                                      category=category, priority=priority, kind=kind, answer=answer,
                                      sourceIds=sorted(set(re.findall(r'\[(X\d+)\s*·', body))),
                                      keywords=[match[1], category], sourceFile=filename))
        index_name = next(n for n in archive.namelist() if '/91_' in n)
        index = archive.read(index_name).decode('utf-8-sig')
        matches = list(re.finditer(r'^## (X\d+)｜(.+)$', index, re.M))
        for i, match in enumerate(matches):
            body = index[match.end():matches[i + 1].start() if i + 1 < len(matches) else len(index)]
            url = re.search(r'\*\*原文：\*\* \[[^\]]+\]\((https?://[^)]+)\)', body).group(1)
            description = re.search(r'\*\*性质与时间：\*\* (.+)', body).group(1)
            title = match[2]
            companies = [c for c in ['腾讯', '拼多多', '得物', '美团', '京东', '阿里', '字节', '好未来', '快手'] if c in title]
            if '微信' in title and '腾讯' not in companies:
                companies.insert(0, '腾讯')
            company = ' / '.join(companies) or '综合'
            sources.append(dict(id=match[1], title=title, url=url, description=description, company=company,
                                questionIds=list(dict.fromkeys('bank-' + n for n in re.findall(r'\[(Q\d{2}-\d{3})\]', body)))))
    ids = {q['id'] for q in questions}
    assert len(questions) == len(ids) == 420, 'Expected 420 unique questions'
    assert len({q['category'] for q in questions}) == 13
    assert all(q in ids for s in sources for q in s['questionIds'])
    assert all(s in {r['id'] for r in sources} for q in questions for s in q['sourceIds'])
    return dict(date='2026-09-07', questions=questions, sources=sources)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('archive', type=Path)
    parser.add_argument('--output', type=Path, default=Path('data/question-bank.js'))
    args = parser.parse_args()
    data = parse_archive(args.archive)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text('window.QUESTION_BANK_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    print(f"Imported {len(data['questions'])} questions, 13 categories, {len(data['sources'])} interview sources")
