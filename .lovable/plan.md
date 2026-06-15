
# The PTM — Landing Page Build Plan

A single-page, desktop-first landing built in TanStack Start with Swiss typographic principles, premium sports-tech aesthetic, and the specified blue/white palette.

## Design Foundation

**Tokens (src/styles.css, `@theme`)**
- `--color-primary: #005BFF`
- `--color-secondary: #1E88E5`
- `--color-background: #FFFFFF`
- `--color-muted: #F5F7FA`
- `--color-foreground: #1F2937`
- `--font-display` / `--font-sans`: Inter (loaded via `<link>` in `__root.tsx`) with Helvetica Neue fallback
- Type scale: hero 72–96px extra bold tight, section 48–64px, body 18–20px
- 12-column grid utility, thin 1px borders, minimal shadows, generous spacing rhythm

**Animation**: framer-motion already-style classes — fade-in on scroll, hover scale/shadow, subtle parallax on hero composition.

## Route & File Structure

Single landing route — replace placeholder in `src/routes/index.tsx`. SEO head() with title, description, OG/Twitter tags, JSON-LD Organization schema.

Components under `src/components/landing/`:
1. `Navbar.tsx` — sticky, white/blur background, logo left, nav center, actions + WhatsApp CTA right
2. `Hero.tsx` — asymmetric 12-col split: oversized headline "EVERYTHING / ABOUT / TABLE TENNIS" left, product composition right with floating blue geometric shapes, trust indicators bar below
3. `FeatureHighlights.tsx` — 3-col grid with large numbers (01/02/03) and bold titles
4. `Categories.tsx` — editorial grid of 8 categories (Premade Bats, Blades, Rubbers, Balls, Tables, Shoes, Apparel, Accessories) as minimal bordered cards with hover lift
5. `CertifiedSecond.tsx` — full-bleed blue section, oversized white type "CERTIFIED / SECOND", 4-tier grading system (Like New / Excellent / Good / Fair) as horizontal indicator bar
6. `BuildYourBat.tsx` — split layout, big type left, exploded-view racket diagram right (Swiss technical aesthetic)
7. `Brands.tsx` — monochrome logo wall (Butterfly, DHS, Stiga, Victas, Xiom, Yasaka, Donic, Tibhar) as styled text marks
8. `BestSellers.tsx` — editorial product grid (4 items): image, name, price, rating, quick-add on hover
9. `CommunityTrust.tsx` — 4-stat modular grid + 2–3 testimonials
10. `Learn.tsx` — "LEARN. PLAY. IMPROVE." with 4 article cards
11. `FinalCTA.tsx` — centered massive type "YOUR NEXT / MATCH / STARTS HERE." + dual CTA
12. `Footer.tsx` — 4-column minimal Swiss footer + © The PTM

## Imagery

Generate via `imagegen` (saved to `src/assets/`):
- Hero composition: premium blade + rubber + ball on blue table surface, studio lighting
- 8 category thumbnails (or 4 hero + reuse) — clean product shots on white
- Exploded racket assembly (blade + 2 rubbers separated) for Build Your Bat
- 4 best-seller product shots
- 4 article thumbnails (editorial sport photography)

Brand "logos" rendered as styled wordmarks (text) to avoid trademark issues.

## Technical Notes

- Tailwind v4 conventions only (no `tailwind.config.js`, use `@theme` in styles.css, `@import "tailwindcss"`)
- Inter loaded via `<link>` in `src/routes/__root.tsx` head
- All copy in English as specified
- Desktop-first but mobile-responsive via grid → stack at `md:` breakpoint, type clamped with `clamp()`
- SEO: `<title>The PTM — Indonesia's Table Tennis Specialist</title>`, meta description <160 chars, single H1 (hero), semantic sections, alt text on all images
- No backend needed for this scope (pure marketing landing)

## Out of Scope

- Functional cart, search, account, product detail pages
- Actual Build Your Bat configurator logic
- CMS / data fetching
- i18n (English only)

Ask if you want any of the above wired up — otherwise I'll build the static landing as specified.
