# Buceo Hurgada

Single-page, Spanish-language marketing site for a scuba center in Hurghada, Egypt. All copy, metadata, and alt text are in Spanish — write new content in Spanish.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- `npm run build` / `npm run start`
- No test suite. For typechecking: `npx tsc --noEmit` (strict mode enabled).

## Stack

- Next.js 16.2.10 App Router, React 19.2, Tailwind CSS v4 (CSS-first config, `@tailwindcss/postcss` plugin — no `tailwind.config.js`).
- Tailwind theme defined with `@theme` in `src/app/globals.css`. Custom tokens: `bg-primary`, `bg-secondary`, `bg-support`, `bg-water`, `bg-bg-white`, `bg-bg-light`, `bg-bg-lighter`, `text-text-dark`, `text-text-muted`, `text-text-light`, `font-poppins`/`font-inter`/`font-instrument`. Prefer these over hardcoded hex.
- Fonts via `next/font/google` in `src/app/layout.tsx`: Poppins, Inter, Instrument Serif (exposed as `--font-*` CSS vars).
- Path alias `@/*` → `src/*`.
- `next/image` remotePatterns only allows `images.unsplash.com` (`next.config.ts`). Any other host must be added there. Local assets: `src/components/assets/` and `public/`.
- Animation: framer-motion (all sections; Hero uses scroll-linked `useScroll`/`useTransform`), swiper (Testimonials). `globals.css` has `prefers-reduced-motion` overrides — respect them.
- CSS utilities in `globals.css`: `.btn-press` (scale-on-active micro-interaction), `.glass-card` (frosted-glass effect), `.hero-overlay` (vignette + noise texture).

## Structure

- Single route `src/app/page.tsx` — all sections render sequentially (each = one scroll block).
- Section components: `src/components/sections/` (PascalCase, default export). Shared UI: `src/components/ui/` (Navbar, Footer).
- `Gallery`, `Testimonials`, `FAQ`, `Contact` loaded via `next/dynamic` — keep section components default-exported.
- Forms use `react-hook-form` + `zod` + `@hookform/resolvers/zod` (see `Contact.tsx`). The Contact submit handler does NOT POST to a backend — it builds a message and `window.open`s a `wa.me` WhatsApp link (const `WHATSAPP_BUSINESS`). Don't add an API route for lead capture unless that changes.
- `Videos.tsx` embeds Instagram reels via iframe (`instagram.com/p/.../embed`); no local video. `herobuceo.mp4` in `src/components/assets/` is used by the Hero only.

## Config

- No `.env` files required. No CI config in-repo. Deploy target: Vercel (`.vercel` gitignored).
