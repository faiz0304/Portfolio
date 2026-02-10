# Developer Guide — Portfolio Project

> **Last updated**: February 2026  
> **Stack**: Next.js 16 (TypeScript + Tailwind) · FastAPI (Python) · Pydantic

---

## 📁 Complete File Map

```
portfolio/
├── .gitignore
├── README.md                          # Setup & deployment guide
│
├── frontend/                          # Next.js application
│   ├── public/
│   │   └── images/profile.jpeg        # Profile photo (replace to change)
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css            # 🎨 Design system (all theme tokens)
│   │   │   ├── layout.tsx             # Root layout (Navbar + Footer + SEO meta)
│   │   │   ├── page.tsx               # Home page (assembles all sections)
│   │   │   ├── resume/page.tsx        # /resume page (print = ATS-friendly PDF)
│   │   │   └── favicon.ico
│   │   ├── components/
│   │   │   ├── Navbar.tsx             # Sticky nav with scroll-spy + mobile menu
│   │   │   ├── HeroSection.tsx        # Name, role, CTA, profile image
│   │   │   ├── AboutSection.tsx       # Bio, education, vision
│   │   │   ├── SkillsSection.tsx      # 6 categorized skill cards
│   │   │   ├── ProjectsSection.tsx    # Project grid cards
│   │   │   ├── ContactSection.tsx     # Form + social links
│   │   │   └── Footer.tsx             # Copyright + icons
│   │   ├── data/
│   │   │   └── profile.ts            # ⭐ SINGLE SOURCE OF TRUTH for all content
│   │   └── lib/
│   │       └── api.ts                 # Backend API helpers
│   ├── package.json
│   ├── tailwind.config.ts (auto)
│   ├── tsconfig.json
│   └── next.config.ts
│
├── backend/                           # FastAPI application
│   ├── main.py                        # App factory, CORS, routes
│   ├── routes/
│   │   ├── contact.py                 # POST /api/contact
│   │   └── resume.py                  # GET /api/resume
│   ├── schemas/
│   │   └── contact.py                 # Pydantic request/response models
│   ├── static/                        # Place resume.pdf here
│   ├── requirements.txt
│   └── .env.example
│
├── shared/
│   └── contracts.json                 # API schema contract
│
└── docs/
    ├── architecture.md                # System diagram & design system
    ├── decisions.md                   # Tech decision log
    ├── progress.md                    # Build milestone log
    └── developer-guide.md             # ← This file
```

---

## 🔑 Key Concept: Single Source of Truth

**All portfolio content lives in one file**: `frontend/src/data/profile.ts`

Every component reads from this file. To update your portfolio content, you **only** edit `profile.ts` — no need to touch any component.

---

## 📝 Common Modification Tasks

### 1. Update Your Personal Info

**File**: `frontend/src/data/profile.ts`

```typescript
export const profile = {
  name: "Your Name",              // → updates Hero, About, Resume, Footer
  role: "Your Title",             // → updates Hero, Resume
  tagline: "Short tagline",       // → updates Hero
  image: "/images/profile.jpeg",  // → updates Hero, About
  summary: "Your bio...",         // → updates About, Resume
  vision: "Your vision...",       // → updates About
  // ...
};
```

### 2. Add a New Project

**File**: `frontend/src/data/profile.ts` → `projects` array

Add an object to the `projects` array:

```typescript
projects: [
  // ...existing projects...
  {
    title: "New Project Name",
    description: "One-line description of what it does.",
    github: "https://github.com/you/repo",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
],
```

That's it — it automatically appears on the Projects section and Resume page.

### 3. Add a New Skill

**File**: `frontend/src/data/profile.ts` → `skills` object

Skills are grouped by category. Add to the relevant array:

```typescript
skills: {
  programming: ["Python", "JavaScript", "NEW_SKILL"],  // add here
  databases: ["MongoDB", "PostgreSQL"],
  frameworks: ["FastAPI", "Streamlit", "LangChain"],
  aiml: ["Machine Learning", "..."],
  engineering: ["..."],
  tools: ["Git & GitHub", "..."],
},
```

### 4. Update Education

**File**: `frontend/src/data/profile.ts` → `education` array

```typescript
education: [
  {
    degree: "Your Degree",
    institution: "University Name",
    cgpa: "3.96",          // leave "" if no CGPA
    year: "Graduated 2026",
  },
],
```

### 5. Change Your Profile Photo

1. Replace the image file: `frontend/public/images/profile.jpeg`
2. Keep the same filename, or update the path in `profile.ts`:
   ```typescript
   image: "/images/new-photo.jpg",
   ```

### 6. Update Contact Information

**File**: `frontend/src/data/profile.ts` → `contact` object

```typescript
contact: {
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  youtube: "https://youtube.com/@YourChannel",
},
```

---

## 🎨 Design System Modifications

### Change Theme Colors

**File**: `frontend/src/app/globals.css` — CSS custom properties at the top

```css
:root {
  --primary: #6C63FF;        /* Main accent (indigo) */
  --primary-light: #8B83FF;  /* Hover state */
  --secondary: #00D4AA;      /* Second accent (mint) */
  --bg-darker: #020617;      /* Deepest background */
  --bg-dark: #0F172A;        /* Card backgrounds */
  --surface: #1E293B;        /* Elevated surfaces */
  --border: #334155;         /* Borders */
  --text-primary: #F8FAFC;   /* Main text */
  --text-secondary: #94A3B8;  /* Muted text */
}
```

Just change these values — every component uses them via Tailwind's `text-primary`, `bg-surface`, etc.

### Change Font

**File**: `frontend/src/app/layout.tsx`

The font is imported from Google Fonts. Change the import:

```typescript
import { Inter } from "next/font/google";
// Change to:
import { Outfit } from "next/font/google";
const font = Outfit({ subsets: ["latin"] });
```

### Modify Animations

**File**: `frontend/src/app/globals.css` — scroll animations

```css
.fade-in-up {
  animation: fadeInUp 0.6s ease-out both;  /* change duration/easing */
}
```

---

## 🧩 Adding a New Section

### Step 1: Create the component

Create `frontend/src/components/NewSection.tsx`:

```tsx
import { profile } from "@/data/profile";

export default function NewSection() {
  return (
    <section id="new-section" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-4">Section Title</h2>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

### Step 2: Add to the home page

**File**: `frontend/src/app/page.tsx`

```tsx
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <NewSection />          {/* ← add here */}
      <ContactSection />
    </>
  );
}
```

### Step 3: Add to navigation (optional)

**File**: `frontend/src/components/Navbar.tsx`

```typescript
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "New Section", href: "#new-section" },  // ← add here
  { label: "Contact", href: "#contact" },
];
```

---

## 🔌 Adding a New Page (like /resume)

1. Create folder: `frontend/src/app/your-page/`
2. Create file: `frontend/src/app/your-page/page.tsx`
3. Export a default React component
4. It's automatically available at `http://localhost:3000/your-page`

---

## 🖥️ Backend Modifications

### Add a New API Endpoint

1. Create route file: `backend/routes/your_route.py`

```python
from fastapi import APIRouter

router = APIRouter()

@router.get("/your-endpoint")
async def your_endpoint():
    return {"message": "Hello"}
```

2. Register in `backend/main.py`:

```python
from routes.your_route import router as your_router
app.include_router(your_router, prefix="/api")
```

### Environment Variables

| Variable | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Frontend `.env.local` | Backend base URL (default: `http://localhost:8000`) |
| `ALLOWED_ORIGINS` | Backend `.env` | CORS allowed origins |
| `PORT` | Backend `.env` | Server port (default: `8000`) |

---

## 🚀 Running the Project

```bash
# Frontend (terminal 1)
cd portfolio/frontend
npm install
npm run dev
# → http://localhost:3000

# Backend (terminal 2)
cd portfolio/backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
# → http://localhost:8000/docs (Swagger UI)
```

---

## 📦 Deployment Guide

### Frontend → Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Set root directory to `frontend`
4. Set environment variable: `NEXT_PUBLIC_API_URL` = your backend URL
5. Deploy

### Backend → Railway / Render

1. Set root directory to `backend`
2. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
3. Set environment variable: `ALLOWED_ORIGINS` = your Vercel frontend URL
4. Deploy

### Update GitHub After Changes

```bash
cd portfolio
git add -A
git commit -m "feat: description of change"
git push origin main
```

---

## 🧪 Build Verification

```bash
# Check frontend builds without errors
cd frontend && npm run build

# Check backend starts without errors
cd backend && uvicorn main:app --port 8000
```

---

## 📋 Quick Reference: Which File to Edit?

| I want to... | Edit this file |
|---|---|
| Change my name/bio/role | `frontend/src/data/profile.ts` |
| Add a project | `frontend/src/data/profile.ts` → `projects` |
| Add a skill | `frontend/src/data/profile.ts` → `skills` |
| Change theme colors | `frontend/src/app/globals.css` |
| Change fonts | `frontend/src/app/layout.tsx` |
| Change SEO title/description | `frontend/src/app/layout.tsx` → `metadata` |
| Modify navbar links | `frontend/src/components/Navbar.tsx` |
| Edit contact form behavior | `frontend/src/components/ContactSection.tsx` |
| Change resume print layout | `frontend/src/app/resume/page.tsx` → `@media print` |
| Change profile photo | Replace `frontend/public/images/profile.jpeg` |
| Modify backend CORS | `backend/main.py` |
| Change contact API logic | `backend/routes/contact.py` |
