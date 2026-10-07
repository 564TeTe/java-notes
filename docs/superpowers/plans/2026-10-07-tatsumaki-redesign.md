# Tatsumaki manga redesign implementation plan

**Goal:** Replace the understated v58 decoration with a complete, bold black-and-white manga environment, use all six supplied pictures, and publish v59.

**Architecture:** Keep the existing theme ID and light reading surfaces. Isolate the expanded visual system in `workspace-tatsumaki.css` and the six-scene selector in `workspace-tatsumaki.js`. Use the original supplied bitmaps with CSS framing and grayscale; no raster edits. The outer stage, navigation and sidebar become dark; a paper reading sheet, hard card shadows, asymmetrical three-panel cover and six-scene contact strip form one design.

**Tech stack:** Existing static HTML/CSS/JavaScript, Node behavior tests, Playwright, existing GitHub Pages deployment.

**Ownership:** Root owns HTML, CSS, original image copies and release. Theme behavior worker owns the new scene controller and its tests. QA worker owns a temporary browser script. Reviewer provides independent visual and code review. Preserve unrelated untracked files.

1. Copy the remaining cover, seated and storm reference images; retain action, portrait and avatar. Add all assets and the new files to the offline shell.
2. Build the cover with title typography, main action panel, supporting manga panels and six accessible thumbnail buttons. Each selection changes the main composition and page background; selection persists independently of the theme.
3. Rework the surrounding navigation, background, directory, search and reading card details together. Keep readable opaque paper, touch targets, keyboard focus, safe-area spacing and reduced-motion support. Avoid changes to other themes.
4. Test scene behavior, all 32 module/width combinations, actual six-image visibility, theme isolation, contrast, forms, persistence and keyboard controls. Inspect desktop and phone screenshots for composition, not merely functional correctness.
5. Publish v59 only after review; verify hosted files and images, actual live scene selection and offline reload.
