from pydantic import BaseModel, EmailStr


class ContactRequest(BaseModel):
    """Incoming contact form submission."""
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    """Response for contact form."""
    success: bool
    message: str
