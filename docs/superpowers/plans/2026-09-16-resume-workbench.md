# Resume Preparation Workbench Implementation Plan

> **For agentic workers:** Use subagent-driven-development for the independent content task and read-only review. The root owns integration and UI. No commits or push in this implementation turn.

**Goal:** Update the supplied resume and make statement preparation and oral practice usable with durable personal records.

**Architecture:** Keep existing global static modules. Add a small ResumeWorkbench API for claim notes, oral practice and snapshot handling, consumed by resume-module.js. Preserve existing question/checklist/draft IDs.

**Tech Stack:** Vanilla JavaScript/CSS, localStorage, Node test runner, Playwright CLI.

Review clarifications: the global renderAll pauses when leaving the resume module, visibilitychange/pagehide pause, and selecting another pitch or importing a valid snapshot resets the timer. Results only are persisted. A missing or non-object workbench preserves local records; an explicit empty object clears; object records are cleaned without throwing. Validate this contract through the complete applyStateSnapshot entry point.

- [x] Content: update resume-data.js, copy assets/resume/sun-te-resume.pdf; create resume-claims.js with 14 claim objects `{id,source,title,quote,prompts:[4 strings],questionIds:[...]}` and date `2026-09-16`. Add meaningful content reference tests in tests/resume-content.test.cjs. New questions factual and evidence-oriented, no unverified implementation assertions.
- [x] State and behavior tests first: tests/resume-workbench.test.cjs loads real data + modules in VM; test four-field notes, verification invalidation, strict snapshot cleaning, legacy preservation/explicit reset, pitch drafts and finite timer outcomes. Run failing tests before implementation.
- [x] Implement resume-workbench.js with `renderOverview(progress)`, `renderClaims(source)`, `renderPitches(source)`, `getSnapshot()`, `applySnapshot(value)`, `enterView(tab)`; internal persistence to resume-prep-workbench. Records flow through existing getResumePrepSnapshot.workbench. Handle localStorage write failures visibly.
- [x] Integrate navigation in resume-module.js. Retain original STAR cases as labeled supplemental references; preserve question list functions and direct question focus. Adjust career test setup to load new scripts.
- [x] Style in resume-workbench.css using existing theme tokens; compact rows, 2-column editing on desktop and stacked mobile; one pitch editor, reference details. No additional persistent sidebars or oversized hero.
- [x] Register scripts/styles in index.html before resume-module.js, assets in sw.js, bump version/meta/update cache to v43 and changed query strings.
- [x] Validate Node suite, real browser input/persistence/theme/small-screen/clock/navigation/backup and offline assets; inspect screenshots and conduct read-only implementation review. Update this checklist and deliver concise summary without publishing.

Validation: 74 Node tests passed. Browser checks cover all six views at 360/390/768/1440px under four themes, exact claim-to-question navigation, local record persistence, full backup restore, mobile choice control, keyboard opening, timer pause/reset and offline v43/PDF integrity. Mobile textarea font is 16px; runtime clock has aria-live=off.
