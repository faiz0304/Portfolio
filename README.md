# Portfolio — Faiz Ur Rehman Ashrafi

A modern, dark-mode portfolio showcasing Faiz Ur Rehman Ashrafi's journey as an emerging Agentic AI & Machine Learning Engineer.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, TypeScript, Tailwind CSS |
| Backend | FastAPI, Pydantic, Uvicorn |
| Shared | JSON Schema contracts |

## Quick Start

### Prerequisites

- Node.js 18+ (LTS)
- Python 3.11+
- npm

### Frontend

```bash
cd portfolio/frontend
npm install
npm run dev          # → http://localhost:3000
```

### Backend

```bash
cd portfolio/backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000   # → http://localhost:8000/docs
```

### Resume

Place your PDF at `portfolio/backend/static/resume.pdf` — it will be served via `/api/resume`.

## Project Structure

```
portfolio/
├── frontend/          # Next.js + TypeScript + Tailwind
│   └── src/
│       ├── app/       # layout, page, globals.css
│       ├── components/# Navbar, Hero, About, Skills, Projects, Contact, Footer
│       ├── data/      # profile.ts — centralized content
│       └── lib/       # API helpers
├── backend/           # FastAPI
│   ├── routes/        # contact.py, resume.py
│   └── schemas/       # Pydantic models
├── shared/            # JSON Schema contracts
└── docs/              # Architecture & decisions
```

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/contact` | POST | Submit contact form |
| `/api/resume` | GET | Download resume PDF |
| `/docs` | GET | Swagger UI |

## Deployment

**Frontend**: `npm run build` → deploy `.next/` output to Vercel, Netlify, or any static host.

**Backend**: Container-ready via `uvicorn main:app --host 0.0.0.0 --port 8000`. Configure `ALLOWED_ORIGINS` env var for production CORS.

## License

© 2026 Faiz Ur Rehman Ashrafi. All rights reserved.
