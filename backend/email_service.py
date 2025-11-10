import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class EmailService:
    """Email service for sending notifications"""
    
    def __init__(self):
        # Using a simple approach - in production, you'd configure SMTP
        self.from_email = "noreply@portfolio.dev"
        self.admin_email = "hamdanahmadkhan101@gmail.com"
    
    def send_contact_notification(self, name: str, email: str, subject: str, message: str) -> bool:
        """
        Send email notification for new contact form submission
        Note: This is a mock implementation. In production, configure SMTP server.
        """
        try:
            logger.info(f"New contact form submission from {name} ({email})")
            logger.info(f"Subject: {subject}")
            logger.info(f"Message: {message}")
            logger.info(f"Timestamp: {datetime.utcnow()}")
            
            # In production, you would use actual SMTP configuration:
            # smtp_server = "smtp.gmail.com"
            # smtp_port = 587
            # smtp_user = "your-email@gmail.com"
            # smtp_password = "your-app-password"
            
            # msg = MIMEMultipart()
            # msg['From'] = self.from_email
            # msg['To'] = self.admin_email
            # msg['Subject'] = f"Portfolio Contact: {subject}"
            
            # body = f"""
            # New message from your portfolio:
            # 
            # Name: {name}
            # Email: {email}
            # Subject: {subject}
            # 
            # Message:
            # {message}
            # 
            # ---
            # Received at: {datetime.utcnow()}
            # """
            
            # msg.attach(MIMEText(body, 'plain'))
            
            # server = smtplib.SMTP(smtp_server, smtp_port)
            # server.starttls()
            # server.login(smtp_user, smtp_password)
            # text = msg.as_string()
            # server.sendmail(self.from_email, self.admin_email, text)
            # server.quit()
            
            logger.info(f"✅ Email notification logged for: {self.admin_email}")
            return True
            
        except Exception as e:
            logger.error(f"❌ Failed to send email notification: {str(e)}")
            return False
    
    def send_auto_reply(self, to_email: str, name: str) -> bool:
        """
        Send auto-reply to user confirming message received
        """
        try:
            logger.info(f"Sending auto-reply to {name} at {to_email}")
            
            # In production, configure SMTP here as well
            # body = f"""
            # Hi {name},
            # 
            # Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            # 
            # Best regards,
            # Hamdan Ahmad Khan
            # Full Stack Developer
            # """
            
            logger.info(f"✅ Auto-reply logged for: {to_email}")
            return True
            
        except Exception as e:
            logger.error(f"❌ Failed to send auto-reply: {str(e)}")
            return False

email_service = EmailService()
