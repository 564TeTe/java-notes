# Concept curriculum implementation plan

**Goal:** Make Java 学习 an explanatory, comprehensive backend curriculum, with Xiaolin readings as linked references rather than the default course body. Preserve the approved clean interface and existing records.

**Architecture:** Add independently authored, structured course data in three domain files. Extend the existing atlas with stable `course-*` IDs while retaining every source and legacy concept. Course chapters lead navigation; source chapters remain available through a collapsed reference directory. Render processes, worked examples, boundaries and interview answers as readable text, with recall answers hidden until requested.

**Tech Stack:** Existing vanilla JavaScript UMD modules, CSS, node:test, Cheerio and browser verification.

## Agreed content contract

Each lesson contains `id`, `topicId` (catalog ID or `engineering`), `chapter`, `title`, `intro`, `explanation` (paragraph array), `flow` (array of `{title,text}`), `example` (`{language,code,output,explanation}`), `boundaries` (array), `answer`, `followUps` and `checks` (arrays of `{question,answer}`), `prerequisites` and `related` (arrays of `{id,why}`), `conceptIds`, `readingIds` (exact source section IDs), `sourceChapters` (catalog chapter titles), and `sources` (`{title,url}`). Strings are plain text, never executable HTML. Course files export arrays in Node and append to `JAVA_COURSE_PARTS` in browsers.

DOCX guides the depth of explanation, especially object preparation versus invocation, `/users/5` parameter/result tracing, Mapper proxy versus mapped result, transaction commit versus SQL return, concurrent cache refill, idempotence and evidence-based troubleshooting. It does not constrain topic coverage or introduce private interview/project information into the public app.

## Tasks

- [x] Author foundations: Java, collections, algorithms, concurrency and JVM, covering every substantive source chapter with original worked teaching.
- [x] Author application/data: Spring/MyBatis, MySQL and Redis, with deep continuous request, transaction and cache examples.
- [x] Author systems/engineering: networking, OS, messaging, distributed systems, system design, Linux, Git, Docker and engineering.
- [x] Add validated course ingestion, chapter coverage audit, precise reference links and readable prerequisite relationships; preserve all old IDs and stores.
- [x] Put courses first, collapse full reference directories, render course teaching and recall checks, keep phone layout and focused reading centered.
- [x] Replace route steps with explanatory courses and make source links return to the same course.
- [x] Verify schema/link/coverage invariants, source and course progress persistence, navigation/recall/reference round trips and mobile widths; run full existing suite.
- [x] Independent content/code review, repair findings, show local preview. No production release requested.

## Acceptance

All substantive existing subject chapters have authored course coverage; resource-only material remains accessible. No generic generated filler, copied source paragraphs, personal notebook, planning UI or decorative subtitle. Course examples distinguish illustrative fragments from runnable programs and state their expected observations. APIs and non-obvious claims are checked against primary sources. A course must support explanation and follow-up answers, not just increase item counts.

## Verified result

- 119 authored units (45 foundations, 34 application/data, 40 systems/engineering) cover all 80 substantive catalog chapters. All 956 source sections and 140 legacy concepts remain addressable. Six routes now open authored courses.
- 438 automated checks passed; `git diff --check` passed. Tests include exact references, stable IDs, independent progress, full chapter coverage, searchable prose, course ordering, source round trip, recall disclosure and HTML escaping.
- 29 browser workflow checks passed at desktop, 390px and 320px, with no browser exceptions. Both course focus and Xiaolin reference focus were centered. Screenshots/scripts are under ignored `output/playwright/course85-*`.
- All 43 Java/JShell examples from the foundations file compiled/executed successfully with Java 17 and matched their documented observations; results in ignored `output/course-foundations-validation/results.json`. Framework/database fragments and two JVM diagnostic shell examples are explicitly contextual examples, not claims of full integration execution.
- Independent code/render review found one prerequisite inference bug. Removed automatic substitution: knowledge links preserve explicitly authored targets. The added regression test failed before the fix and passed after it; reviewer confirmed the real MySQL prerequisite cycle and engineering mislink were removed.
- Fixed course next/previous ordering to match visible grouped chapters and made progress changes update the visible directory immediately while preserving disclosure and focus.
- Local preview: `http://127.0.0.1:8766/?view=mindmap&preview=course-v85`. Production release/version remains unchanged.
