# How to Start Your Portfolio Application

## Database Location
✅ **Your database IS on your PC!** 
- MongoDB 8.2.0 is installed on your computer
- Database will be stored locally at: `mongodb://localhost:27017`
- Database name: `portfolio_db`

## Quick Start Guide

### Step 1: Start MongoDB (if not running)

**Option A: Check if MongoDB is already running**
```powershell
# Test if MongoDB is accessible
Test-NetConnection -ComputerName localhost -Port 27017
```

**Option B: Start MongoDB Service (Windows)**
```powershell
# Start MongoDB as a Windows Service
net start MongoDB

# Or if it's not installed as a service, start it manually:
mongod --dbpath "C:\data\db"
```

**Option C: Start MongoDB using MongoDB Compass**
- Open MongoDB Compass
- It will automatically start MongoDB if it's not running

### Step 2: Start Backend Server

Open a **new terminal/PowerShell window** and run:

```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

You should see:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

✅ Backend API will be available at: `http://localhost:8000`
✅ API Documentation at: `http://localhost:8000/docs`

### Step 3: Start Frontend Server

Open **another new terminal/PowerShell window** and run:

```powershell
cd E:\Portfolio\app\frontend
npm start
```

You should see:
```
Compiled successfully!
You can now view portfolio-frontend in the browser.
  Local:            http://localhost:3000
```

✅ Frontend will be available at: `http://localhost:3000`

## Verify Everything is Working

1. **Backend Health Check:**
   - Open browser: `http://localhost:8000/api/`
   - Should see: `{"message":"Portfolio API is running","version":"1.0.0","developer":"Hamdan Ahmad Khan"}`

2. **Backend API Docs:**
   - Open browser: `http://localhost:8000/docs`
   - Should see Swagger UI with all API endpoints

3. **Frontend:**
   - Open browser: `http://localhost:3000`
   - Should see your portfolio homepage with all sections

## Troubleshooting

### MongoDB Not Running
```powershell
# Check if MongoDB service exists
Get-Service -Name MongoDB -ErrorAction SilentlyContinue

# Start MongoDB service
net start MongoDB

# Or check MongoDB process
Get-Process -Name mongod -ErrorAction SilentlyContinue
```

### Backend Connection Error
- Make sure MongoDB is running
- Check `backend/.env` file exists with correct `MONGO_URL`
- Check if port 8000 is available

### Frontend Can't Connect to Backend
- Make sure backend is running on port 8000
- Check `frontend/.env` file has `REACT_APP_BACKEND_URL=http://localhost:8000`
- Check browser console for CORS errors

### Port Already in Use
```powershell
# Find what's using port 8000
netstat -ano | findstr :8000

# Find what's using port 3000
netstat -ano | findstr :3000
```

## Environment Files

Make sure these files exist:

**backend/.env:**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

**frontend/.env:**
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

## Next Steps After Starting

1. ✅ Backend server running on port 8000
2. ✅ Frontend server running on port 3000
3. ✅ MongoDB running on port 27017
4. ✅ Visit `http://localhost:3000` to see your portfolio
5. ✅ Test the contact form - messages will be saved to MongoDB
6. ✅ View API docs at `http://localhost:8000/docs`

## Stopping the Servers

- **Backend:** Press `Ctrl+C` in the backend terminal
- **Frontend:** Press `Ctrl+C` in the frontend terminal
- **MongoDB:** Usually runs as a service, leave it running

---

**Your database is stored locally on your PC in MongoDB!** 
All your contact form messages and any future data will be stored in the `portfolio_db` database on your local MongoDB installation.

