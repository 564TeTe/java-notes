# Java interview learning redesign

## User outcome

Replace the default mobile canvas with a short path: topic → interview question → answer points and follow-ups → the matching question-bank category. Remove personal-map editing and the separate bank navigation. Keep historical map data in backups, existing concept notes, mastery, Xiaolin reading progress, and the centered focus reader. No scheduling features.

## Implementation

- Content worker: add validated interview paths and accurate cards for core concepts.
- Study worker: expose category navigation that clears stale filters and handles already memorized categories.
- View worker: render accessible, escaped topic and lesson views with a secondary knowledge outline.
- Root: preserve storage/backup contracts while replacing the canvas controller; implement responsive styles, focus lifecycle, notes flushing, and Xiaolin return state.
- Rename visible navigation to Java 学习; retain the mindmap route for existing links.

## Verification

Test legacy backup preservation and rollback, corrupt storage protection, note save failure, category navigation, exact Xiaolin section handoff, focus return, safe rendering and curriculum IDs. Run the whole existing test suite. Verify phone and desktop layouts and keyboard/focus interactions in a real browser. Review the final diff before delivery.

## Delivery

Prepare a working local preview for the new design. Keep production publication separate until the redesign is reviewed or the user requests release.

## Completed validation

- Added 10 topic paths, 30 interview answer cards, 60 follow-ups, and 10 validated Xiaolin chapter entries across 9 supported topics. Engineering topics retain their original sources rather than inaccurate Xiaolin links.
- Full Node suite: 376 passing tests. Syntax and diff checks passed.
- Browser verified topic and concept → exact Xiaolin section → original context, pending notes, inherited focus, category practice and return.
- Browser verified search and Ctrl+K, recall state across focus, phone widths 320/390/768 and desktop widths 1440/1920; focus centered in Tatsumaki, paper and dark themes, without horizontal overflow.
- Independent review caught pending drafts omitted on a full rerender. Fixed by overlaying pending edits in the render model and added save-failure regression coverage.
- Local preview: http://127.0.0.1:8766/?view=mindmap&preview=interview-v82. Production version unchanged.

## Release v82

The user approved publication after the preview. Updated the app metadata, version manifest, update client and offline cache to 82. Re-ran all 376 tests successfully and verified changed runtime assets and new content are included in the deployment. Release targets the existing main-branch GitHub Pages site.
