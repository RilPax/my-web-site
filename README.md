# normuminovruslan.uz

Personal portfolio of Normuminov Ruslan — front-end developer.

## Stack

- React 19 + TypeScript, bundled with Vite
- SASS (BEM, shared design tokens in `src/styles/_tokens.scss`)
- GSAP 3 — ScrollTrigger, SplitText, ScrollToPlugin

## Scripts

```bash
npm start        # dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
npm run lint
```

## Structure

```
src/
  data/content.ts   # all texts, links, projects, stack — edit content here
  lib/gsap.ts       # plugin registration and shared media queries
  hooks/            # useGsap (scoped gsap.context), useMagnetic
  styles/           # tokens, global styles, mono font
  components/
    Preloader, Cursor, Nav, Hero, Marquee,
    About, Stack, Projects, Services, Contact, Footer,
    ui/             # Icon, RollText, MagneticButton, SectionHeading
```

All animations respect `prefers-reduced-motion`; the custom cursor and
hover effects are enabled only on devices with a fine pointer.
