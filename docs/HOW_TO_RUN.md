# How to Run Your Portfolio Application

## ⚠️ Common Error: "uvicorn is not recognized"

This error happens when you try to run uvicorn without activating the virtual environment first.

## ✅ Correct Way to Start Backend

### Method 1: Activate Virtual Environment First (Recommended)

```powershell
# Navigate to backend directory
cd E:\Portfolio\app\backend

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Now uvicorn will be available
uvicorn server:app --reload --port 8000
```

### Method 2: Use Python Module Directly (No Activation Needed)

```powershell
# Navigate to backend directory
cd E:\Portfolio\app\backend

# Run uvicorn using Python from virtual environment
.\venv\Scripts\python.exe -m uvicorn server:app --reload --port 8000
```

### Method 3: Create a Startup Script

Create a file `start-backend.ps1` in the backend directory:

```powershell
# start-backend.ps1
cd $PSScriptRoot
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

Then run:
```powershell
.\start-backend.ps1
```

## ✅ Correct Way to Start Frontend

```powershell
# Navigate to frontend directory
cd E:\Portfolio\app\frontend

# Start the development server
npm start
```

## 🚀 Quick Start Guide

### Terminal 1: Backend Server

```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

**Expected Output:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
✅ MongoDB connected to portfolio_db
INFO:     Application startup complete.
```

### Terminal 2: Frontend Server

```powershell
cd E:\Portfolio\app\frontend
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view portfolio-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

## 📋 Step-by-Step Instructions

### 1. Start MongoDB (if not running)
```powershell
# Check if MongoDB is running
Get-Service -Name MongoDB

# Start MongoDB if needed
net start MongoDB
```

### 2. Start Backend Server

**Option A: With Virtual Environment Activated**
```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

**Option B: Without Activation (Direct Python)**
```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\python.exe -m uvicorn server:app --reload --port 8000
```

### 3. Start Frontend Server
```powershell
cd E:\Portfolio\app\frontend
npm start
```

## 🔍 Verify Servers Are Running

### Check Backend (Port 8000)
```powershell
# Test connection
Test-NetConnection -ComputerName localhost -Port 8000

# Or visit in browser
# http://localhost:8000/api/
# http://localhost:8000/docs
```

### Check Frontend (Port 3000)
```powershell
# Test connection
Test-NetConnection -ComputerName localhost -Port 3000

# Or visit in browser
# http://localhost:3000
```

## 🐛 Troubleshooting

### Error: "uvicorn is not recognized"

**Solution:**
- Make sure you're in the `backend` directory
- Activate the virtual environment: `.\venv\Scripts\Activate.ps1`
- Or use: `.\venv\Scripts\python.exe -m uvicorn server:app --reload --port 8000`

### Error: "npm is not recognized"

**Solution:**
- Make sure Node.js is installed
- Check Node.js is in your PATH
- Try: `node --version` and `npm --version`

### Error: "MongoDB connection failed"

**Solution:**
- Make sure MongoDB is running: `net start MongoDB`
- Check MongoDB is accessible: `Test-NetConnection -ComputerName localhost -Port 27017`
- Verify `.env` file has correct `MONGO_URL`

### Error: "Port already in use"

**Solution:**
```powershell
# Find what's using the port
netstat -ano | findstr ":8000"
netstat -ano | findstr ":3000"

# Kill the process (replace <PID> with actual process ID)
taskkill /PID <PID> /F

# Or change to a different port
```

## 📝 Creating Startup Scripts

### Backend Startup Script

Create `backend/start-backend.ps1`:
```powershell
Write-Host "Starting Backend Server..." -ForegroundColor Green
cd $PSScriptRoot
.\venv\Scripts\Activate.ps1
Write-Host "Backend server starting on http://localhost:8000" -ForegroundColor Cyan
uvicorn server:app --reload --port 8000
```

### Frontend Startup Script

Create `frontend/start-frontend.ps1`:
```powershell
Write-Host "Starting Frontend Server..." -ForegroundColor Green
cd $PSScriptRoot
Write-Host "Frontend server starting on http://localhost:3000" -ForegroundColor Cyan
npm start
```

### Run Both Scripts

Double-click the scripts or run:
```powershell
.\backend\start-backend.ps1
.\frontend\start-frontend.ps1
```

## 🎯 Quick Reference

| Service | Command | Port | URL |
|---------|---------|------|-----|
| MongoDB | `net start MongoDB` | 27017 | mongodb://localhost:27017 |
| Backend | `uvicorn server:app --reload --port 8000` | 8000 | http://localhost:8000 |
| Frontend | `npm start` | 3000 | http://localhost:3000 |

## ✅ Current Status

After running the commands above:
- ✅ Backend: Running on http://localhost:8000
- ✅ Frontend: Running on http://localhost:3000
- ✅ MongoDB: Running on mongodb://localhost:27017

Visit http://localhost:3000 to see your portfolio!

---

**Remember:** Always activate the virtual environment before running uvicorn, or use the full path to Python in the virtual environment.

