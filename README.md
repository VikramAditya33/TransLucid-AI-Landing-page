<div align="center">

# TransLucid AI — Landing & Product Demo

Translate. Explain. Understand.

</div>

## Overview

TransLucid AI is a Chrome Extension and landing experience that translates text to any language and explains it for true understanding. This repository contains the marketing site, interactive feature demos (video), pricing, tutorial, and legal pages.

The site emphasizes premium typography, glass UI, smooth interactions, and fast performance.

## Tech Stack

- Framework: Next.js (App Router), React 19, TypeScript
- Styling: Tailwind CSS v4, custom CSS (globals), glassmorphism + hover glows
- Fonts: next/font — Playfair Display (display), Geist Sans/Mono, PT Sans Narrow
- Media: Next/Image, HTML5 video (auto‑play, loop, muted), public assets
- Effects/Animation:
  - Typewriter headings (React hooks)
  - ClickSpark canvas effect (custom HTML5 Canvas)
  - Subtle shadows, rings, and gradients for depth
- 3D (optional component): three.js + @react-three/fiber (silk background)
- Linting/Build: ESLint (Next + TS), Turbopack (`next build --turbopack`)
- Deployment: Vercel (OpenGraph/metadata configured)

## Project Structure

```
src/
  app/
    features/        # Dedicated features page (video demos)
    pricing/         # Dedicated pricing page
    privacy/         # Privacy Policy
    terms/           # Terms of Service
    tutorial/        # Dedicated tutorial page (controls enabled)
    layout.tsx       # Global providers, fonts, BackgroundSilk, ClickSpark
    globals.css      # Tailwind + custom utilities (scroll, blink, etc.)
  components/
    Hero.tsx         # Typing headline, hero video card, CTAs
    Features.tsx     # Home section features grid (used earlier)
    Navbar.tsx       # Top navigation with TL logo
    Footer.tsx       # Footer with links
    About.tsx        # About + animated bilingual name
    Pricing.tsx      # (legacy home section)
    ClickSpark.tsx   # Global click particles (Canvas)
    BackgroundSilk.tsx # Optional R3F silk background
public/
  TL.png             # Logo
  feature_*.mp4      # Feature demo videos
  tutorial.mp4       # Tutorial video
```

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

Type-check, lint and build:

```bash
npm run build
```

## Key Features

- Premium typography hierarchy
  - Playfair Display for section titles (serif, bold, 5xl–6xl)
  - Clean sans for body/UI (Geist/Inter), gray tone, relaxed leading
- Feature videos
  - Rounded‑2xl, soft shadow, subtle glow on hover
  - Autoplay, loop, muted, playsInline
- Hero
  - Typing loop across multiple taglines
  - Glassy video card with gradient overlay
  - CTAs: Install Free on Chrome, See It in Action
- About
  - Bilingual typewriter for name (English/Hindi)
  - Underline animation on hover
- Pricing
  - Three plans (Free/Monthly/Yearly) with glass cards
  - FAQ with links to X for trials
- Global ClickSpark
  - Fixed, high z-index, across routes

## Environment & Deployment

No runtime secrets required for the site pages. Deploy by connecting the repo to Vercel.

Metadata is configured in `src/app/layout.tsx` with `metadataBase` and OpenGraph fields.

## Contributing

PRs welcome. Please keep:

- Type safety (TS) and ESLint clean
- Visual hierarchy (typography + spacing) consistent
- Small, focused commits

## License

MIT — feel free to use the site structure and effects. Replace media and branding as needed.
