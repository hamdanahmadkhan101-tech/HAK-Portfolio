from fastapi import APIRouter, HTTPException
from models import ContactMessage, ContactMessageCreate
from email_service import email_service
from database import get_db
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Database will be initialized per request

@router.post("/contact", response_model=ContactMessage)
async def submit_contact_form(message_data: ContactMessageCreate):
    """Submit contact form - saves to DB and sends email notification"""
    try:
        # Get database instance with validation
        try:
            db = get_db()
            if db is None:
                raise HTTPException(
                    status_code=503, 
                    detail="Database service unavailable. Please try again later."
                )
        except RuntimeError as e:
            logger.error(f"❌ Database connection error: {str(e)}")
            raise HTTPException(
                status_code=503,
                detail=f"Database connection failed: {str(e)}"
            )
        except Exception as e:
            logger.error(f"❌ Unexpected database error: {str(e)}")
            raise HTTPException(
                status_code=503,
                detail="Database service unavailable. Please check server configuration."
            )
        
        # Test database connection before proceeding
        try:
            await db.client.admin.command('ping')
        except Exception as e:
            logger.error(f"❌ Database ping failed: {str(e)}")
            raise HTTPException(
                status_code=503,
                detail=f"Database connection test failed: {str(e)}"
            )
        
        logger.info(f"📥 Received contact form submission from {message_data.email}")
        
        # Check for recent duplicate submissions (within last 5 minutes)
        from datetime import datetime, timedelta
        five_minutes_ago = datetime.utcnow() - timedelta(minutes=5)
        
        try:
            existing_message = await db.contact_messages.find_one({
                "email": message_data.email,
                "subject": message_data.subject,
                "message": message_data.message,
                "created_at": {"$gte": five_minutes_ago}
            })
        except Exception as e:
            logger.error(f"❌ Error checking for duplicates: {str(e)}")
            # Continue anyway - don't block submission if duplicate check fails
        
        if existing_message:
            logger.warning(f"⚠️ Duplicate submission detected from {message_data.email}")
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
        try:
            result = await db.contact_messages.insert_one(contact_message.dict())
            logger.info(f"💾 Saved contact message to database with ID: {result.inserted_id}")
        except Exception as e:
            logger.error(f"❌ Error saving to database: {str(e)}")
            raise HTTPException(
                status_code=500, 
                detail=f"Failed to save message to database: {str(e)}"
            )
        
        if not result.inserted_id:
            logger.error("❌ Database insert returned no inserted_id")
            raise HTTPException(status_code=500, detail="Failed to save message - no ID returned")
        
        # Send email notification to admin
        try:
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
        except Exception as e:
            logger.warning(f"⚠️ Email sending failed: {str(e)}, but message was saved to DB")
            # Don't fail the request if email fails - message is already saved
        
        logger.info(f"✅ Contact form submission successful from {message_data.email}")
        return contact_message
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Unexpected error submitting contact form: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to submit contact form: {str(e)}"
        )

@router.get("/contact")
async def get_contact_messages():
    """Get all contact messages (admin only - future)"""
    try:
        # Get database instance
        db = get_db()
        messages = await db.contact_messages.find().sort("created_at", -1).to_list(100)
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")
