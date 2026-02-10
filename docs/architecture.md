# Architecture Overview

## System Diagram

```
┌─────────────────────────────────┐     ┌─────────────────────┐
│          FRONTEND               │     │       BACKEND        │
│   Next.js 16 • TypeScript       │     │   FastAPI • Python   │
│   Tailwind CSS                  │────►│                      │
│                                 │     │  POST /api/contact   │
│  ┌───────────┐ ┌─────────────┐  │     │  GET  /api/resume    │
│  │ Components │ │ Data Layer  │  │     │  GET  /docs          │
│  │ (7 comps)  │ │ profile.ts  │  │     └─────────────────────┘
│  └───────────┘ └─────────────┘  │
│         page.tsx (assembler)    │     ┌─────────────────────┐
└─────────────────────────────────┘     │      SHARED          │
                                        │  contracts.json      │
                                        └─────────────────────┘
```

## Data Flow

1. `profile.ts` — single source of truth for all content
2. Components read from `profile.ts` — no hardcoded strings in JSX
3. Contact form POSTs to `/api/contact` via fetch
4. Resume download links to `/api/resume`

## Component Map

| Component | Purpose |
|---|---|
| `Navbar` | Sticky nav, scroll-spy, mobile hamburger |
| `HeroSection` | Name, role, CTA, profile image with glow ring |
| `AboutSection` | Bio, vision, education cards, learning highlights |
| `SkillsSection` | 6 categorized skill cards + traits |
| `ProjectsSection` | 10 project cards in 3-col grid |
| `ContactSection` | Form + social link cards |
| `Footer` | Copyright + social icons |

## Design System

- **Theme**: Dark-mode glassmorphic
- **Primary**: `#6C63FF` (electric indigo)
- **Secondary**: `#00D4AA` (mint)
- **Background**: Slate gradient `#020617` → `#0F172A`
- **Cards**: Frosted glass with blur backdrop
- **Font**: Inter (Google Fonts)
