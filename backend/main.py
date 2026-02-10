import logging
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.contact import router as contact_router
from routes.resume import router as resume_router

# ── Logging ──────────────────────────────────────────────
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(name)s | %(levelname)s | %(message)s",
)

# ── App ──────────────────────────────────────────────────
app = FastAPI(
    title="Portfolio API",
    description="Backend API for Faiz Ur Rehman Ashrafi's portfolio — contact form and resume endpoints.",
    version="1.0.0",
)

# ── CORS ─────────────────────────────────────────────────
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,http://127.0.0.1:3000",
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routes ───────────────────────────────────────────────
app.include_router(contact_router, prefix="/api")
app.include_router(resume_router, prefix="/api")


@app.get("/")
async def root():
    return {
        "service": "Portfolio API",
        "version": "1.0.0",
        "docs": "/docs",
    }
