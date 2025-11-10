"""Quick test to verify MongoDB connection"""
import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

async def test_mongo():
    try:
        # Get MongoDB URL from environment variable
        mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
        client = AsyncIOMotorClient(mongo_url)
        # Test connection
        await client.admin.command('ping')
        print('✅ MongoDB connection successful!')
        client.close()
        return True
    except Exception as e:
        print(f'❌ MongoDB connection failed: {e}')
        return False

if __name__ == '__main__':
    asyncio.run(test_mongo())

