"""
Database connection module for MongoDB
"""
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging

logger = logging.getLogger(__name__)

# MongoDB connection - will be initialized when get_db() is called
client = None
db = None

def init_db():
    """Initialize MongoDB connection"""
    global client, db
    try:
        mongo_url = os.environ.get('MONGO_URL')
        db_name = os.environ.get('DB_NAME')
        
        if not mongo_url:
            raise ValueError("MONGO_URL environment variable is not set")
        if not db_name:
            raise ValueError("DB_NAME environment variable is not set")
        
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        
        logger.info(f"✅ MongoDB connected to {db_name}")
        return db
    except Exception as e:
        logger.error(f"❌ Failed to connect to MongoDB: {str(e)}")
        raise

def get_db():
    """Get database instance"""
    global db
    if db is None:
        db = init_db()
    return db

def close_db():
    """Close MongoDB connection"""
    global client
    if client:
        client.close()
        logger.info("MongoDB connection closed")

