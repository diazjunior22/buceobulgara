<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Buceo Hurgada

Single-page, Spanish-language marketing site for a scuba center in Hurghada (Egypt). All copy, metadata, and alt text are in Spanish — write new content in Spanish.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run lint` — ESLint (`eslint`, flat config in `eslint.config.mjs`)
- `npm run build` / `npm run start`
- No test suite and no typecheck script. For typechecking use `npx tsc --noEmit` (strict).

## Stack notes (verify against `node_modules/next/dist/docs/` first)

- Next.js 16.2.10 App Router, React 19.2, Tailwind CSS v4 (CSS-first config).
- Tailwind theme is defined with `@theme` in `src/app/globals.css`, not a JS config. Custom tokens generate classes for colors — `bg-primary`, `bg-secondary`, `bg-support`, `bg-water`, `bg-bg-white`, `bg-bg-light`, `bg-bg-lighter`, `text-text-dark`, `text-text-muted`, `text-text-light` — and fonts `font-poppins`/`font-inter`/`font-instrument`. Prefer these tokens over hardcoded hex.
- Fonts via `next/font/google` in `src/app/layout.tsx`: Poppins, Inter, Instrument Serif (exposed as `--font-*` CSS vars).
- Path alias `@/*` → `src/*` (see `tsconfig.json`).
- `next/image` `remotePatterns` only allows `images.unsplash.com` (`next.config.ts`). Any other remote image host must be added there. Local assets live in `src/components/assets/` and `public/`.
- Animation libs: framer-motion (all sections; Hero uses scroll-linked `useScroll`/`useTransform`), swiper (Testimonials). `globals.css` has `prefers-reduced-motion` overrides — respect them.

## Structure

- All sections render in sequence on the single route `src/app/page.tsx` (each section is one scroll block).
- Section components: `src/components/sections/` (PascalCase). Shared UI: `src/components/ui/` (Navbar, Footer).
- `Gallery`, `Testimonials`, `FAQ`, `Contact` are loaded via `next/dynamic` — keep section components default-exported.
- Forms use `react-hook-form` + `zod` + `@hookform/resolvers/zod` (see `Contact.tsx`). The Contact submit handler does NOT POST to a backend — it builds a message and `window.open`s a `wa.me` WhatsApp link (const `WHATSAPP_BUSINESS` in the same file). Don't add an API route expecting a lead capture unless that changes.
- `Videos.tsx` embeds Instagram reels via iframe (`instagram.com/p/.../embed`); no local video. The local `herobuceo.mp4` lives in `src/components/assets/` and is used by the Hero.

## Config

- No `.env` files are required. No CI config in-repo. Deploy target is Vercel (`.vercel` is gitignored).
