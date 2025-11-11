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
_db_initialized = False
_db_initialization_error = None

def init_db():
    """Initialize MongoDB connection"""
    global client, db, _db_initialized, _db_initialization_error
    try:
        mongo_url = os.environ.get('MONGO_URL')
        db_name = os.environ.get('DB_NAME')
        
        if not mongo_url:
            error_msg = "MONGO_URL environment variable is not set"
            logger.error(f"❌ {error_msg}")
            _db_initialization_error = error_msg
            raise ValueError(error_msg)
        if not db_name:
            error_msg = "DB_NAME environment variable is not set"
            logger.error(f"❌ {error_msg}")
            _db_initialization_error = error_msg
            raise ValueError(error_msg)
        
        # Log connection attempt (without exposing credentials)
        mongo_url_safe = mongo_url.split('@')[-1] if '@' in mongo_url else mongo_url
        logger.info(f"🔌 Attempting to connect to MongoDB: {mongo_url_safe}")
        
        # Create client with connection timeout
        client = AsyncIOMotorClient(
            mongo_url, 
            serverSelectionTimeoutMS=10000,  # 10 second timeout
            connectTimeoutMS=10000
        )
        db = client[db_name]
        
        _db_initialized = True
        _db_initialization_error = None
        logger.info(f"✅ MongoDB client initialized for database: {db_name}")
        return db
    except Exception as e:
        error_msg = f"Failed to connect to MongoDB: {str(e)}"
        logger.error(f"❌ {error_msg}")
        _db_initialization_error = error_msg
        _db_initialized = False
        raise


def get_db():
    """Get database instance"""
    global db, _db_initialized, _db_initialization_error
    if db is None:
        try:
            db = init_db()
        except Exception as e:
            logger.error(f"❌ Database initialization failed: {str(e)}")
            raise RuntimeError(f"Database not available: {str(e)}") from e
    
    if db is None:
        error_msg = _db_initialization_error or "Database connection not initialized"
        logger.error(f"❌ {error_msg}")
        raise RuntimeError(error_msg)
    
    return db

def is_db_available():
    """Check if database is available"""
    global db, _db_initialized
    return db is not None and _db_initialized

def close_db():
    """Close MongoDB connection"""
    global client, db, _db_initialized
    if client:
        client.close()
        db = None
        _db_initialized = False
        logger.info("MongoDB connection closed")

