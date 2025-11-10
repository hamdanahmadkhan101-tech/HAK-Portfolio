# MongoDB Database Information

## ✅ MongoDB Status

**MongoDB is running and accessible:**
- **Port:** 27017
- **Status:** ✅ Running
- **Connection:** `mongodb://localhost:27017`
- **Database Name:** `portfolio_db`

## 📍 Database Location

Your MongoDB database is stored **locally on your PC**:
- **Service:** MongoDB Server (MongoDB) - Running
- **Process ID:** 3812
- **Data Storage:** Usually in `C:\data\db` on Windows
- **Connection String:** `mongodb://localhost:27017`

## 🗄️ Database Collections

The `portfolio_db` database contains:

### `contact_messages` Collection
- Stores all contact form submissions
- Created automatically when first message is saved
- Fields:
  - `id`: Unique message ID
  - `name`: Sender's name
  - `email`: Sender's email
  - `subject`: Message subject
  - `message`: Message content
  - `status`: Message status (unread/read)
  - `created_at`: Timestamp

## 🔍 How to View Your Database

### Option 1: MongoDB Compass (GUI - Recommended)

1. **Download MongoDB Compass** (if not installed):
   - https://www.mongodb.com/try/download/compass

2. **Connect to MongoDB:**
   - Connection String: `mongodb://localhost:27017`
   - Or click "Fill in connection fields individually"
   - Host: `localhost`
   - Port: `27017`

3. **View Database:**
   - Select database: `portfolio_db`
   - View collection: `contact_messages`
   - See all your contact form submissions

### Option 2: MongoDB Shell (Command Line)

```powershell
# Open MongoDB Shell
mongosh

# Switch to your database
use portfolio_db

# View all collections
show collections

# View all contact messages
db.contact_messages.find().pretty()

# Count messages
db.contact_messages.countDocuments()

# View recent messages
db.contact_messages.find().sort({created_at: -1}).limit(5)
```

### Option 3: Python Script

```python
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient

async def view_messages():
    client = AsyncIOMotorClient('mongodb://localhost:27017')
    db = client['portfolio_db']
    
    messages = await db.contact_messages.find().sort('created_at', -1).to_list(100)
    
    for msg in messages:
        print(f"From: {msg['name']} ({msg['email']})")
        print(f"Subject: {msg['subject']}")
        print(f"Message: {msg['message']}")
        print(f"Date: {msg['created_at']}")
        print("-" * 50)

asyncio.run(view_messages())
```

## 📊 Database Operations

### View All Messages
```javascript
// In MongoDB Shell
db.contact_messages.find().pretty()
```

### Count Messages
```javascript
db.contact_messages.countDocuments()
```

### Find Unread Messages
```javascript
db.contact_messages.find({status: "unread"})
```

### Mark Message as Read
```javascript
db.contact_messages.updateOne(
    {id: "message-id"},
    {$set: {status: "read"}}
)
```

### Delete a Message
```javascript
db.contact_messages.deleteOne({id: "message-id"})
```

### Delete All Messages
```javascript
db.contact_messages.deleteMany({})
```

## 🔧 MongoDB Service Management

### Check MongoDB Status
```powershell
Get-Service -Name MongoDB
```

### Start MongoDB
```powershell
net start MongoDB
```

### Stop MongoDB
```powershell
net stop MongoDB
```

### Restart MongoDB
```powershell
Restart-Service MongoDB
```

## 📝 Connection Details

**For Your Application:**
- **Connection String:** `mongodb://localhost:27017`
- **Database Name:** `portfolio_db`
- **Collection:** `contact_messages`

**In backend/.env:**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
```

## 🚀 Quick Access

1. **MongoDB Compass:** `mongodb://localhost:27017`
2. **MongoDB Shell:** `mongosh`
3. **Python:** Use `motor` library (already installed)
4. **Backend API:** Contact messages are automatically saved to MongoDB

## 📌 Notes

- MongoDB runs as a Windows service
- Data is stored locally on your PC
- Database persists even when application is stopped
- Contact form submissions are automatically saved
- You can view/manage data using MongoDB Compass or shell

---

**Your MongoDB database is ready and running!** All contact form submissions from your portfolio will be stored in the `contact_messages` collection.

