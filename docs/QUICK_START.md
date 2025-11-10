# 🚀 Quick Start Guide - Portfolio Application

## ✅ Setup Complete!

All dependencies are installed and configured. Your database is **on your PC** (MongoDB localhost).

## 📍 Database Location

**Your MongoDB database is stored locally on your PC:**
- **Location:** `mongodb://localhost:27017`
- **Database Name:** `portfolio_db`
- **Status:** ✅ MongoDB is running and accessible
- **Storage:** Data is stored on your local machine in MongoDB's data directory

## 🎯 Start Your Application

### Terminal 1: Start Backend Server

```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

**Expected Output:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
✅ MongoDB connected to portfolio_db
```

**✅ Backend API:** http://localhost:8000
**✅ API Docs:** http://localhost:8000/docs

### Terminal 2: Start Frontend Server

```powershell
cd E:\Portfolio\app\frontend
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view portfolio-frontend in the browser.
  Local:            http://localhost:3000
```

**✅ Frontend App:** http://localhost:3000

## 🔍 Verify Everything Works

1. **Backend Health Check:**
   - Visit: http://localhost:8000/api/
   - Should see: `{"message":"Portfolio API is running","version":"1.0.0","developer":"Hamdan Ahmad Khan"}`

2. **Backend API Documentation:**
   - Visit: http://localhost:8000/docs
   - You'll see interactive API documentation (Swagger UI)

3. **Frontend Application:**
   - Visit: http://localhost:3000
   - You'll see your portfolio with all sections:
     - Home/Hero section
     - About section
     - Projects showcase
     - Skills
     - Experience
     - Contact form

## 📁 Environment Files (Already Created)

### backend/.env
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

### frontend/.env
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

## 🗄️ Database Information

**Your database is on your PC:**
- **Type:** MongoDB (Local Installation)
- **Version:** 8.2.0
- **Connection:** `mongodb://localhost:27017`
- **Database Name:** `portfolio_db`
- **Collections:**
  - `contact_messages` - Stores contact form submissions

**Where is the data stored?**
- MongoDB stores data in a data directory on your PC (usually `C:\data\db` on Windows)
- You can view your data using MongoDB Compass (GUI tool)
- Or use MongoDB shell: `mongosh`

## 🧪 Test the Application

1. **Test Contact Form:**
   - Go to http://localhost:3000
   - Scroll to Contact section
   - Fill out and submit the form
   - Message will be saved to MongoDB
   - Check MongoDB to see the saved message

2. **Test API Endpoints:**
   - Visit http://localhost:8000/docs
   - Try the `/api/profile` endpoint
   - Try the `/api/projects` endpoint
   - Try the `/api/skills` endpoint

## 🛠️ Troubleshooting

### MongoDB Not Running
```powershell
# Start MongoDB service
net start MongoDB

# Or check if it's running
Test-NetConnection -ComputerName localhost -Port 27017
```

### Backend Won't Start
- Make sure virtual environment is activated
- Check if port 8000 is available
- Verify `.env` file exists in `backend/` directory
- Check MongoDB is running

### Frontend Won't Start
- Make sure you're in `frontend/` directory
- Check if port 3000 is available
- Verify `.env` file exists in `frontend/` directory
- Make sure backend is running first

### Frontend Can't Connect to Backend
- Verify backend is running on port 8000
- Check `frontend/.env` has correct `REACT_APP_BACKEND_URL`
- Check browser console for errors
- Verify CORS is configured in backend

## 📊 View Your Database

**Option 1: MongoDB Compass (GUI)**
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Select database: `portfolio_db`
4. View collection: `contact_messages`

**Option 2: MongoDB Shell**
```powershell
mongosh
use portfolio_db
db.contact_messages.find()
```

## 🎉 You're All Set!

Your portfolio application is ready to use:
- ✅ Backend API running
- ✅ Frontend application running
- ✅ MongoDB database connected
- ✅ All dependencies installed
- ✅ Environment files configured

**Next Steps:**
1. Start both servers (backend and frontend)
2. Visit http://localhost:3000
3. Test the contact form
4. Customize your portfolio content
5. Deploy when ready!

---

**Remember:** Your database is stored **locally on your PC** in MongoDB. All contact form messages and any future data will be stored in the `portfolio_db` database on your local MongoDB installation.

