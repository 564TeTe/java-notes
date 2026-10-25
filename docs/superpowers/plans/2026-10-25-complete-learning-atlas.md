# Complete Java learning atlas

## Goal

Provide the whole Java/backend learning library, clear knowledge diagrams and connected learning routes, full explanations, and room to practice expressing understanding. Replace the v82 curated-card experience. The user's Word file is reference material only; do not copy personal details or limit the curriculum to its interview questions.

## Design

- Full curriculum: all 956 existing Xiaolin sections (945 lessons and 11 resource sections), plus all 140 existing Java concepts. Keep stable IDs and existing saved records.
- Home: knowledge diagram and learning routes, compact topic nodes with real connecting lines. No slogans, decorative eyebrow text, curated priority subsets or progress ribbons.
- Topic: complete chapter diagram and directory; every chapter and lesson is accessible. Search includes all content.
- Lesson: full section rendered directly in the workspace, with a persistent desktop directory and a compact mobile directory. Show related concept explanations, examples and pitfalls as useful supplements.
- Reading and recall modes; one personal explanation field. Xiaolin lessons share the original reading notes and read status; old concept notes keep their storage.
- Routes retain their own previous/next order; ordinary learning follows the whole topic's order.
- Fresh, restrained layout: body text around 14–15 px, modest headings, clear hierarchy, no large empty cards or decorative images. Focus mode remains centered.
- Practice stays a direct category link. Personal map editing and scheduling remain absent.

## Ownership

- Atlas worker: pure comprehensive index and tests.
- Route worker: validated cross-topic routes and tests.
- View worker: pure HTML views and semantic tests.
- Root: controller, shared reading-data integration, responsive styling, asset wiring, integration tests and real-browser verification.

## Validation

Verify complete coverage and stable identifiers; input escaping; shared note/read state; pending drafts across rerenders and failed writes; asynchronous loading races; route navigation; focus; source-library round trips; all assets cached. Check 320/390 px mobile and wide desktop layouts, search, directories, and meaningful content for Redis/MySQL/Spring as well as Java. Review independently before delivering a local preview. Do not publish this redesign without a fresh release request.

## Verified implementation

- 18 topics, 1096 reachable entries, six connected routes. A browser check opened every topic and matched each rendered directory to its full index. All 956 Xiaolin sections have nonempty local HTML.
- 416 automated tests passed, including asynchronous loading races, draft/selection preservation, IME composition, route versus topic sequencing, shared source records, and backup contracts.
- Real-browser checks passed at 320/390 px and 1440 px: inline full readings, diagrams, route steps, recall, notes/read-state persistence, failed-write retry, chapter expansion preservation, category practice, focus centering, and search.
- Real-browser delayed-loading checks preserved textarea focus, selection and simulated Chinese composition. Code contrast checked in light/dark themes; tables, images and code blocks stayed within a 320 px viewport.
- Independent review issues were fixed: stale source-load errors, lost editing focus, read-status mutation on save failure, and ambiguous route sequencing after directory navigation.
- Local preview: http://127.0.0.1:8766/?view=mindmap&preview=learning-v83. Asset query versions are 83; deployed app/cache release remains 82 pending a new release request. Browser evidence is under ignored output/playwright/atlas-*.

## Follow-up: chapter clarity and removing the note editor

The user accepted the overall learning workspace and requested clearer expanded chapters plus removal of the “我的理解” input. Render chapters in one column with one chapter open per directory, subtle row separators and a clear current chapter. Keep every lesson accessible and retain diagram shortcuts. Opening a reading selects its chapter; returning to the topic retains that chapter. Sidebar and mobile directory groups operate independently.

Remove the learning-page note editor and its obsolete controller handlers. Retain stored notes in imports, exports and existing reading records; source status changes must not overwrite notes. Keep oral recall, reveal-explanation and learned-state controls. The original Xiaolin reader remains unchanged. Main prose continues to use the existing local Xiaolin content, with existing concept explanations as supplements; the interface and routes organize that material.

Verify one-open behavior, chapter shortcuts, current chapter on return, full coverage, no editor in read/recall/focus, stored-note preservation, search, read state and narrow-screen layout. Preview assets advance to 84; no publishing in this refinement.

Completed: 419 automated tests passed, independent review found no important issues, and 21 real-browser checks passed at 1440/390/320 px. Browser checks covered MySQL's complete 123-entry directory, single-open chapters, shortcuts, source reading, no note editor in all modes, preserving existing notes when read status changes, returning to the reading chapter, independent mobile/sidebar expansion, and searching folded chapters. Evidence: output/playwright/atlas84-*. Local preview: http://127.0.0.1:8766/?view=mindmap&preview=learning-v84.
