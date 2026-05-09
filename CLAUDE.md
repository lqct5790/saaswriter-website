# SaaSWriter Website

## What We're Building
Landing page for **SaaSWriter** — an AI copywriter agent for SaaS businesses. Writes copy for any content type needed to promote a SaaS product (landing pages, emails, ads, social, case studies, etc.).

## Domain & Brand
- **Domain:** saaswriter.app
- **Brand name:** SaaSWriter
- **Tagline direction:** TBD — something around "your AI copywriter for SaaS"

## Tech Stack
- Astro (static site generation)
- Tailwind CSS
- Deployed on Vercel

## Pages
- Single landing page only (no routing needed)

## Design Direction
- **Aesthetic:** Liquid glass UI + futuristic
- Liquid glass = semi-transparent panels, backdrop-blur, soft glows, glass-morphism
- Futuristic = dark deep-space backgrounds, neon/electric accents, crisp typography
- Reference: Apple visionOS / iOS 26 liquid glass aesthetic

## Target Audience
- SaaS content marketers
- SaaS founders

## Language
- English only

## Rules for Claude
- This is a single landing page — no i18n needed
- No git operations unless asked
- Follow the docs/plans/ design documents strictly when building
- Update CLAUDE.md when project structure changes

## Project Structure
```
docs/
├── plans/              # project-spec, brand-guidelines, tailwind-tokens, site-layout, copy-direction
├── prototypes/         # v1-vN.html visual iterations
└── current-copy/       # reference copy
src/                    # Astro site (created in Phase 4)
public/                 # Static assets
```

## Key Design Docs
- Project spec: docs/plans/project-spec.md
- Brand guidelines: docs/plans/brand-guidelines.md (created after prototype approval)
- Copy direction: docs/plans/copy-direction.md
