# Tatsumaki manga theme

**Goal:** Add a ninth theme based on the user's Tatsumaki references and publish it through the existing GitHub Pages release process.

**Chosen design:** The user selected pure black-and-white manga. Use paper surfaces, charcoal controls, sharp panel borders, and the supplied artwork directly. Keep text surfaces opaque and character art outside reading content. A compact decorative banner appears beneath the page heading; desktop directories also show a portrait at the bottom. The existing book icon becomes a small character portrait for this theme. Other themes keep their layout and appearance.

**Ownership:** Theme worker owns `workspace-theme.js` and `tests/theme.test.cjs`; root owns scoped CSS, decorative HTML, original image copies, release version markers, and publication. Browser QA worker owns a temporary script only.

**Implementation:**

1. Extend real theme behavior tests, verify failure, then add `tatsumaki` as a light theme. Preserve all eight existing IDs, automatic system mode, persistence, cross-tab synchronization, and dialog focus handling.
2. Copy user-supplied action, portrait, and avatar images to `assets/themes/` without modifying the originals. Add them to the offline shell.
3. Add theme-scoped palette and manga details to `workspace-theme.css`; add one decorative, hidden-by-default banner to `index.html`.
4. Verify nine-theme behavior, all eight main views at mobile/desktop widths, artwork loading, source selection, no overflow or covered controls, restoring saved themes, and hiding artwork when switching themes. Inspect screenshots and request independent review.
5. Bump v58 and asset query versions, commit only task files, push main, and verify hosted HTML/assets/service worker and offline theme operation.
