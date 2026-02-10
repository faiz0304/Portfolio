import logging
from datetime import datetime, timezone

from fastapi import APIRouter

from schemas.contact import ContactRequest, ContactResponse

router = APIRouter()
logger = logging.getLogger(__name__)


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactRequest) -> ContactResponse:
    """
    Receive a contact form submission.

    In production, this would forward to an email service, Slack webhook,
    or database. For now, it logs the submission and returns success.
    """
    logger.info(
        "Contact form submission received: name=%s email=%s at=%s",
        payload.name,
        payload.email,
        datetime.now(timezone.utc).isoformat(),
    )

    return ContactResponse(
        success=True,
        message=f"Thank you {payload.name}! Your message has been received.",
    )
