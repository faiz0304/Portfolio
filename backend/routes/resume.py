import os

from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter()

RESUME_PATH = os.path.join(os.path.dirname(__file__), "..", "static", "resume.pdf")


@router.get("/resume")
async def download_resume():
    """
    Serve the resume PDF for download.

    If no resume file exists yet, returns a helpful JSON message.
    """
    if os.path.isfile(RESUME_PATH):
        return FileResponse(
            path=RESUME_PATH,
            media_type="application/pdf",
            filename="Faiz_Ur_Rehman_Ashrafi_Resume.pdf",
        )

    return {"message": "Resume file not yet uploaded. Place resume.pdf in backend/static/"}
