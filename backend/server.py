from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
import sys

# Add the backend directory to Python path
ROOT_DIR = Path(__file__).parent
sys.path.insert(0, str(ROOT_DIR))

load_dotenv(ROOT_DIR / '.env')

# Import routes
from routes import profile, projects, skills, contact, stats, experience

# MongoDB connection
from database import get_db, close_db

# Create the main app without a prefix
app = FastAPI(title="Hamdan's Portfolio API", version="1.0.0")

# Initialize database on startup
@app.on_event("startup")
async def startup_db_client():
    """Initialize database connection on startup"""
    try:
        logger.info("🚀 Starting database connection...")
        db = get_db()
        # Test connection asynchronously
        try:
            await db.client.admin.command('ping')
            logger.info("✅ Database connection verified on startup")
        except Exception as e:
            logger.warning(f"⚠️ Database ping failed on startup: {str(e)}")
            logger.warning("⚠️ Server will continue, but database operations may fail")
    except Exception as e:
        logger.error(f"❌ CRITICAL: Failed to initialize database on startup: {str(e)}")
        logger.error("❌ Server will start, but database operations will fail")
        logger.error("❌ Please check MONGO_URL and DB_NAME environment variables")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {
        "message": "Portfolio API is running",
        "version": "1.0.0",
        "developer": "Hamdan Ahmad Khan"
    }

# Include all route modules
api_router.include_router(profile.router, tags=["Profile"])
api_router.include_router(projects.router, tags=["Projects"])
api_router.include_router(skills.router, tags=["Skills"])
api_router.include_router(contact.router, tags=["Contact"])
api_router.include_router(stats.router, tags=["Stats"])
api_router.include_router(experience.router, tags=["Experience"])

# Root endpoint for health checks
@app.get("/")
async def health_check():
    return {"status": "healthy", "message": "Portfolio API is running"}

# Database health check endpoint
@app.get("/health/db")
async def health_check_db():
    """Check database connection health"""
    from database import get_db, is_db_available
    try:
        db = get_db()
        if db is None:
            return {
                "status": "unhealthy",
                "database": "not_connected",
                "message": "Database connection not initialized"
            }
        
        # Test connection
        await db.client.admin.command('ping')
        return {
            "status": "healthy",
            "database": "connected",
            "message": "Database connection is working"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "error",
            "message": f"Database connection failed: {str(e)}"
        }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

@app.on_event("shutdown")
async def shutdown_db_client():
    close_db()