from fastapi import APIRouter, HTTPException
from models import ContactMessage, ContactMessageCreate
from email_service import email_service
from database import get_db
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Get database instance
db = get_db()

@router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(message_data: ContactMessageCreate):
    """Submit contact form - saves to DB and sends email notification"""
    try:
        # Check for recent duplicate submissions (within last 5 minutes)
        from datetime import datetime, timedelta
        five_minutes_ago = datetime.utcnow() - timedelta(minutes=5)
        
        existing_message = await db.contact_messages.find_one({
            "email": message_data.email,
            "subject": message_data.subject,
            "message": message_data.message,
            "created_at": {"$gte": five_minutes_ago}
        })
        
        if existing_message:
            raise HTTPException(
                status_code=429, 
                detail="Duplicate submission detected. Please wait before sending another message."
            )
        
        # Create contact message object
        contact_message = ContactMessage(
            name=message_data.name,
            email=message_data.email,
            subject=message_data.subject,
            message=message_data.message
        )
        
        # Save to MongoDB
        result = await db.contact_messages.insert_one(contact_message.dict())
        
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to save message")
        
        # Send email notification to admin
        email_sent = email_service.send_contact_notification(
            name=message_data.name,
            email=message_data.email,
            subject=message_data.subject,
            message=message_data.message
        )
        
        if email_sent:
            logger.info(f"✅ Email notification sent for message from {message_data.name}")
            # Send auto-reply to user
            email_service.send_auto_reply(message_data.email, message_data.name)
        else:
            logger.warning(f"⚠️ Email notification failed, but message saved to DB")
        
        return contact_message
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@router.get("/contact")
async def get_contact_messages():
    """Get all contact messages (admin only - future)"""
    try:
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")
