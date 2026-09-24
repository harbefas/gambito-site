# gambito-site

Landing page for [Gambito](https://github.com/harbefas/gambito), a keyboard-first
Lichess client for tiling desktops.

Live: https://harbefas.github.io/gambito-site/

## Stack

React 19 · Vite · Tailwind, with the Yerba Mate / Tererê tokens vendored in
`src/styles/mate-tokens.css` — the same palette Gambito itself ships, so the
screenshots and the page around them match.

## Commands

| Command         | Action                        |
| :-------------- | :---------------------------- |
| `npm install`   | Install dependencies          |
| `npm run dev`   | Dev server                    |
| `npm run build` | Build to `./dist/`            |

## Content

Screenshots live in `public/` and their grouping and captions in
`src/data/shots.ts`. They are copied from the Gambito repository rather than
generated here; re-copy them when the UI changes, or the page starts lying.

The install commands in `src/components/Hero.tsx` are two lines on purpose:
`scripts/install.sh` ships a prebuilt binary, so the runtime dependencies have
to be installed first or `gambito open` finds no Quickshell.

## Deploy

Push to `master`; the workflow builds and publishes `dist/` to `gh-pages`.
