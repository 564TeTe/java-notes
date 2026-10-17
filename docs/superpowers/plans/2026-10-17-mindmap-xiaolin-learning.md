# Mind map and Xiaolin learning integration

> **For agentic workers:** Use subagent-driven-development with explicit file ownership; implement and verify each independent task before integration.

**Goal:** Make concept learning flow naturally into precise Xiaolin explanations and back, while deepening core Java branches and preserving mobile clarity.

**Architecture:** Keep concept IDs and mastery records stable. Add a curated concept-to-section map, resolved against the existing Xiaolin catalog. Show reading evidence separately from concept mastery. Use the existing reader with a transient return context; retain map topic, selection, expansion, pan/zoom, and personal notes.

**Tech Stack:** Existing vanilla JS UMD modules, SVG/CSS, Node test runner, Playwright CLI.

## Approved scope

The user accepted the preceding recommendation and requested implementation. Prioritize precise links and core Java depth. Preserve question navigation and personal maps; no scheduling. Broader backend expansion remains a later content increment.

## Tasks

- [x] Content: extend `data/java-learning-language.js` and `data/java-learning-runtime.js` with 22 HashMap, concurrent collection, AQS, executor and JVM concepts. Preserve existing IDs. Validate graph links and teaching content in `tests/java-learning-core.test.cjs`.
- [x] Mapping: create `data/java-learning-xiaolin.js` with curated stable section IDs for 121 concepts and 207 unique readings. Test missing IDs, duplicates, resource-only references, and irrelevant topic drift.
- [x] Integration core: add `java-learning-reading.js` to resolve mappings and compute deduplicated reading progress without mutating mastery. Test exact section resolution, unknown IDs, done/undone and ancestor aggregation.
- [x] Learning UI: extend `java-learning-view.js`, `mindmap-module.js`, `mindmap.css` with concise reading cards, optional extra links and reading evidence, preserving prerequisite/related concept navigation. Keep phone header and map size compact; fix the sticky reading return action.
- [x] Reader bridge: extend `xiaolin-module.js`, `xiaolin-view.js`, `xiaolin.css` with a contextual return action. Save pending notes before navigation. Restore selection, pan/zoom, expanded readings and all scroll containers; keep independent reader use unchanged.
- [x] Assets/version: wire new files in `index.html` and `sw.js`, prepare coherent version 78 metadata and add `?view=mindmap` entry. Update `docs/mindmap.md`.
- [x] Verification: test 390px and 320px phones, desktop, exact reader section targeting, return state, immediate note saving, dark mode and offline use. Independent review confirmed ordinary and focus-mode return positions, 1.44x phone zoom and extra reading expansion.

## Acceptance

Clicking a curated reading link opens its exact section, not merely a book cover or chapter. Returning restores the original concept and map context with updated reading progress. Existing notes and backups remain compatible. Knowledge relationships remain concept-based; Xiaolin question titles appear only as supporting readings. No bulk 945-node graph, no plan/calendar UI, no notification badges.
