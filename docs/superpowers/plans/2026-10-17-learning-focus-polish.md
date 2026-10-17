# Learning focus and interface simplification

**Goal:** Reduce distractions while preserving the complete concept → Xiaolin reading → concept workflow and all saved learning data.

**User direction:** Deeply optimize learning, remove unhelpful clutter, and make focus mode substantially more focused. Implement directly within the current local preview; preserve prior changes.

## Design

- Normal atlas: compact controls, no decorative English labels or repetitive guidance. Keep source modes but put map management in the existing menu. Show undo/redo only for editable personal maps.
- Lessons: meaningful overview for the root, concise readings and mastery controls, deduplicated concept relationships. Move copy/export-like actions and reference material out of the primary reading flow; keep notes easy to reach.
- Focus: hide app navigation, illustrations and unrelated controls, make outside controls inert, support Escape and keyboard focus containment. Dedicated atlas header offers map/reading and exit; current task takes the viewport. Concept reading remains comfortably sized rather than stretching long lines across the screen.
- Reader: preserve natural window scrolling so section tracking works. Focus hides surrounding navigation and artwork, keeps reading settings on demand, and works on phones. Carry focus into Xiaolin and restore the prior reader preference on returning to the atlas.
- Shared focus lifecycle: clean up inert/scroll state on rerender, workspace navigation or exit. Preserve existing pan, zoom, notes and return scroll state.

## Ownership

- Root: `learning-focus.js`, `learning-focus.css`, `mindmap-module.js`, `mindmap.css`, associated integration tests, manifests/version and verification.
- Lesson worker: `java-learning-view.js`, new `tests/java-learning-view.test.cjs` only; root styles its documented selectors.
- Reader worker: `xiaolin-module.js`, `xiaolin-view.js`, `xiaolin.css`, Xiaolin tests only.

## Verification

- Meaningful behavior tests for simplified root, duplicate relationship removal, focus lifecycle, focus handoff and Escape.
- Browser at 320/390/1440 widths: focus map/reading, search, keyboard, dark mode, reading settings, exact Xiaolin section, return to correct focus surface, zoom and all scroll positions, notes retained, normal navigation restored.
- Offline reading regression and complete Node test suite; independent review before claiming completion.

## Outcome (local preview v79)

- Implemented compact topic selection, quiet root overview, deduplicated concept links, and on-demand reference/management controls.
- Implemented shared focus isolation, keyboard containment, Escape/Ctrl+K handling, separate atlas map/reading surfaces, reading-position retention, and reader focus inheritance/restoration.
- Preserved concept notes, Xiaolin notes/progress, question navigation, personal editing and backup behavior. Focused save failures remain visible.
- Verification: 352 Node tests passed; browser flows passed at 320, 390 and 1440 pixels, including normal and focused handoff/return, scroll and zoom, note saves, keyboard trapping, personal editing, dark mode and offline reload.
- Independent review caught a mobile directory popup overlap; fixed with a regression test and verified at 320 pixels.
- Local preview only. No deployment performed in this iteration.

## Release integration

User requested deployment after preview acceptance. Integrated remote main 5442161 (Xiaolin two-sided artwork), retaining both the shelf design and immersive reader changes. Release version raised to 80 because remote production had already used 79. Runtime asset queries and offline cache use the new version.
