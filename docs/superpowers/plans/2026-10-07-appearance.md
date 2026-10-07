# Appearance settings implementation plan

> **For agentic workers:** Follow the owned file boundaries below. Review the integrated change before publication.

**Goal:** Offer eight readable, restrained themes and a clearer appearance picker, then publish the verified release to the existing GitHub Pages site.

**Architecture:** Keep the existing early theme script and shared CSS overrides. Preserve `light`, `blue`, `sand`, and `dark` preferences; add `paper`, `sage`, `rose`, and `ink`. A separate `data-theme-mode` attribute lets both dark palettes share component rules. Continue using `workspace-theme` storage, with an explicit system-preference control.

**Tech Stack:** Static HTML, CSS variables, native dialog, plain JavaScript, Node tests, Playwright CLI, GitHub Pages.

## Design

Use low saturation paper, stone, botanical, and ink colors. Avoid decorative gradients, oversized rounded surfaces, and floating shadows. Theme previews should show a small reading layout with a title, text, and a note surface. Eight choices use four columns on desktop and two on mobile. The dialog must fit short screens with internal scrolling. Selected state uses a border and check mark, with focus outlines and readable labels. Keep existing theme IDs and all study data untouched.

## Tasks

- [ ] Extend meaningful theme behavior tests before implementation: new saved choices, first-paint dark mode, system reset, persistence, blocked storage, and cross-tab synchronization.
- [ ] Update `workspace-theme.js` (worker): palette metadata, mode attribute, eight preview choices, system control, footer state, accessible dialog behavior. Own `tests/theme.test.cjs` as well.
- [ ] Update `workspace-theme.css` (root): new complete light/dark tokens, shared dark selectors, restrained picker, responsive grid, consistent brand and component accents.
- [ ] Run `node --test tests/*.test.cjs` and JavaScript syntax checks.
- [ ] Use Playwright to inspect all themes across primary modules, mobile widths, keyboard dismissal, persistence, system reset, and cross-tab sync. Inspect captured screenshots.
- [ ] Review the integrated diff, resolve material findings, and update all release and modified asset versions.
- [ ] Commit only task files, push `main`, wait for Pages publication, verify the hosted version and theme assets.

## Acceptance

Eight direct choices work without reloading or losing the current reading state. Both dark palettes cover all primary views without bright leftover surfaces. Saved legacy IDs still load, system mode follows OS changes, and manual selection wins until system mode is restored. No horizontal overflow at 360 px. Existing tests pass. Hosted release contains the new picker and current service worker.
