# Port-Vue-Folio

A lightweight, data-driven developer portfolio built with **Vue 3**, **Vite**, and a custom **SVG motion system**. All content lives in JSON files — fork it, swap your data, and deploy.

[![Deploy](https://github.com/sarvarunajvm/port-vue-folio/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/sarvarunajvm/port-vue-folio/actions/workflows/deploy.yml)
[![CI](https://github.com/sarvarunajvm/port-vue-folio/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/sarvarunajvm/port-vue-folio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # production bundle in dist/
pnpm preview      # preview the build locally
pnpm lint         # eslint check
```

## Make It Yours

1. Fork the repository.
2. Edit the JSON files in `src/data/`:
   - `about.json` — name, titles, summary, social links, hero content, metrics
   - `experience.json` — work history
   - `education.json` — degrees
   - `projects.json` — portfolio projects and case studies
   - `skills.json` — technical skill groups
3. Drop your resume at `public/files/Resume.pdf`.
4. Replace favicons in `public/` and update `public/manifest.json`.
5. Deploy — GitHub Pages workflow is included (push a `v*` tag).

## SVG Motion System

SVG is used as a first-class visual language throughout the site:

| Component | Where |
|---|---|
| Animated monogram | Navbar logo |
| Circuit scene | Hero background |
| Transition lines | Between sections |
| Topology diagrams | Project cards |
| Flow diagrams | Case study pages |
| CTA arrows | Buttons |
| Timeline spine | Experience section |
| Skill constellation | Strengths grid |
| Metric waveforms | Impact cards |
| Signal beacon | Footer |

### Design Principles

- **CSS-first animation** — `stroke-dasharray`, `transform`, `opacity`; no runtime JS animation library required.
- **Theme-aware** — SVG tokens (`--svg-stroke`, `--svg-glow`, etc.) adapt to dark/light mode via `_variables.scss`.
- **Accessibility** — all non-essential motion is disabled when `prefers-reduced-motion: reduce` is active.
- **Scroll-driven reveals** — `IntersectionObserver` composables trigger draw-on-enter effects.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Vue 3.5.32 (Composition API) |
| Build | Vite 8 |
| Styling | SCSS 1.99 + CSS custom properties |
| Icons | Lucide Vue Next 1.0 |
| Routing | Vue Router 5 |
| Linting | ESLint 10 + Vue Plugin 10 |
| CI/CD | GitHub Actions → GitHub Pages |
| Package manager | pnpm 10 |

## Project Structure

```
src/
├── components/
│   ├── layout/      # NavBar, Footer
│   ├── sections/    # Hero, Work, Timeline, Impact, About, Contact …
│   ├── shared/      # SectionHeading, Tag, IconLink, CommandPalette
│   └── svg/         # All SVG animation components
├── composables/     # useTheme, useScrollReveal, useScrollEntrance …
├── data/            # JSON content files
├── pages/           # HomePage, CaseStudyPage, NotFound
└── styles/          # SCSS partials (_variables, _typography, _utilities)
```
