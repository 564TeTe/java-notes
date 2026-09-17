# Resume Reading Implementation Plan

> Use subagent-driven-development for independent content ownership and requesting-code-review for final review. No commit/push until user requests it.

**Goal:** Replace preparation management with directly readable, substantive resume interview answers.

**Architecture:** Existing resume module owns reading state, search and pagination. resume-data.js holds original/updated content plus 32 new questions; resume-question-expansion.js appends 60 more. Legacy workbench state remains a small snapshot adapter only.

**Tech Stack:** Vanilla JS/CSS, Node tests, Playwright CLI, offline service worker.

- [x] Rewrite existing 48 answers as direct, grounded study content; add 24 Zhishu + 8 general questions in resume-data.js (content worker 1). Add source/topic/priority/followupAnswer metadata and preserve all old IDs and drafts.
- [x] Create resume-question-expansion.js containing 20 Beiruan + 14 Yonyou + 26 technical questions with concrete answers and follow-up answers (content worker 2). Verify official references.
- [x] Add behavior tests for default visible answers, no removed forms/timers, bounded pagination, filtering, direct question location and legacy snapshot preservation; run red before changes.
- [x] Replace resume-module UI with four tabs: questions, pitches, stories (resume outline links), sources. Delete empty draft/score/clock/checklist surfaces. Rework resume-workbench.js to legacy data compatibility only; rewrite resume-workbench.css for compact reading.
- [x] Add expansion loading to HTML and test harnesses; bump v44 queries/cache. Update content tests for quality and reference coverage. Keep supplied PDF unchanged.
- [x] Verify full Node suite, browser functional and theme/viewport checks, offline shell, and independent content/code review. Report actual final counts and publishing status.

Validation completed on 2026-09-17: 76 Node tests pass; 146 browser checks pass with no runtime errors across four themes and 360/390/768/1440 px widths. Offline reload uses java-notes-v44 and retains 140 questions, 20 visible answers per page, technical expansion filtering, and the unchanged supplied PDF. Independent review found no substantive content issues; desktop select focus was corrected and verified. Final distribution: 13 general, 38 Zhishu, 38 Beiruan, 25 Yonyou, 26 technical. Publishing authorized by the user after local review; the 76-test suite passed again before committing.
