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
    get_db()

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