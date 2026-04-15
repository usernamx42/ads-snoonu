# CLAUDE.md

## Project

Snoonu Ads — Next.js 15 marketing site for Qatar's retail media platform.

## Stack

- Next.js 15.5 (App Router, Turbopack dev)
- React 19
- Tailwind CSS 4
- Framer Motion (minimal — prefer CSS for hover/tap/infinite animations)
- Phosphor Icons (use `/dist/ssr` import in server components)
- TypeScript 5

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint

## Deployment

- **Vercel** auto-deploys from `main`. Push to `main` to deploy.
- No PR needed for deployment — merge to `main` and push.
- Site: ads-snoonu.vercel.app

## Performance Guidelines

- Prefer CSS transitions/transforms over framer-motion for hover, tap, and infinite animations.
- Only use framer-motion for complex orchestrated animations (scroll reveal, AnimatePresence, staggered entrance).
- Use `will-change: transform` on CSS-animated elements.
- Throttle scroll listeners with `requestAnimationFrame`.
- Use native `IntersectionObserver` for simple in-view triggers; reserve framer-motion `useInView` for animation orchestration.
