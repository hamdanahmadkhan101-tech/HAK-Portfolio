"""Check MongoDB database and collections"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from backend/.env
load_dotenv(Path(__file__).parent / '.env')

async def check_database():
    try:
        mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
        db_name = os.environ.get('DB_NAME', 'portfolio_db')
        
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        
        # List all collections
        collections = await db.list_collection_names()
        
        print(f"[OK] Connected to MongoDB: {mongo_url}")
        print(f"[OK] Database: {db_name}")
        print(f"\nCollections: {len(collections)}")
        
        for collection_name in collections:
            count = await db[collection_name].count_documents({})
            print(f"  - {collection_name}: {count} document(s)")
            
            # Show sample documents
            if count > 0:
                sample = await db[collection_name].find_one()
                print(f"    Sample: {sample}")
        
        if len(collections) == 0:
            print("  (No collections yet - they will be created when data is added)")
        
        client.close()
        return True
    except Exception as e:
        print(f'[ERROR] Error: {e}')
        return False

if __name__ == '__main__':
    asyncio.run(check_database())