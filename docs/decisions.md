# Technical Decisions

## Stack Choices

| Decision | Choice | Rationale |
|---|---|---|
| Frontend framework | Next.js 16 | Spec requirement. Static optimization, SEO-first, App Router. |
| Styling | Tailwind CSS | Spec requirement. Utility-first, fast prototyping. |
| TypeScript | Strict mode | Spec requirement. Type safety, maintainability. |
| Backend | FastAPI | Spec requirement. Auto docs, Pydantic validation, async. |
| Font | Inter | Clean, professional, widely supported geometric sans-serif. |
| Color palette | Dark glassmorphic | Matches "Professional, Clean, Modern, Technical" tone preference. |

## Architecture Decisions

1. **Single-page scrollable layout** — All sections on one page. Simpler UX, better mobile experience, no router complexity for a portfolio.
2. **Centralized data layer** — `profile.ts` holds all content. Components are pure renderers. Easy to update content without touching JSX.
3. **No database** — Contact form logs submissions. Resume served as a static file. No unnecessary complexity.
4. **Independent deployment** — Frontend and backend have no build-time coupling. Frontend can deploy to Vercel while backend deploys as a container.
5. **JSON Schema shared contract** — `shared/contracts.json` defines the contact payload structure referenced by both sides.

## Deviations from Spec

None. All spec requirements followed as specified.
