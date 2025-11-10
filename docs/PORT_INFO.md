# Port Information - Portfolio Application

## 📊 Current Port Status

### ✅ Port 27017 - MongoDB (RUNNING)
- **Service:** MongoDB Database
- **Status:** ✅ **RUNNING**
- **Connection:** `mongodb://localhost:27017`
- **Database:** `portfolio_db`
- **Process ID:** 3812

### ❌ Port 8000 - Backend API (NOT RUNNING)
- **Service:** FastAPI Backend Server
- **Status:** ❌ **NOT RUNNING**
- **URL:** `http://localhost:8000`
- **API Docs:** `http://localhost:8000/docs`
- **Health Check:** `http://localhost:8000/api/`

### ❌ Port 3000 - Frontend (NOT RUNNING)
- **Service:** React Frontend Application
- **Status:** ❌ **NOT RUNNING**
- **URL:** `http://localhost:3000`
- **Dev Server:** React Development Server

## 🔌 Port Configuration

### Backend Configuration
**File:** `backend/.env`
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

**Backend runs on:** Port 8000
- Configured in: `uvicorn server:app --reload --port 8000`

### Frontend Configuration
**File:** `frontend/.env`
```
REACT_APP_BACKEND_URL=http://localhost:8000
```

**Frontend runs on:** Port 3000
- Default React development server port
- Can be changed with: `PORT=3001 npm start`

### MongoDB Configuration
**MongoDB runs on:** Port 27017
- Default MongoDB port
- Configured in MongoDB service settings

## 🚀 How to Start Your Apps

### Start Backend (Port 8000)
```powershell
cd E:\Portfolio\app\backend
.\venv\Scripts\Activate.ps1
uvicorn server:app --reload --port 8000
```

### Start Frontend (Port 3000)
```powershell
cd E:\Portfolio\app\frontend
npm start
```

## 🔍 Check Port Status

### Check if Port is in Use
```powershell
# Check specific port
netstat -ano | findstr ":8000"
netstat -ano | findstr ":3000"
netstat -ano | findstr ":27017"

# Or use PowerShell
Test-NetConnection -ComputerName localhost -Port 8000
Test-NetConnection -ComputerName localhost -Port 3000
Test-NetConnection -ComputerName localhost -Port 27017
```

### Find What's Using a Port
```powershell
# Find process using port 8000
netstat -ano | findstr ":8000"
# Note the PID, then:
Get-Process -Id <PID>
```

## 📝 Port Summary

| Service | Port | Status | URL |
|---------|------|--------|-----|
| MongoDB | 27017 | ✅ Running | mongodb://localhost:27017 |
| Backend API | 8000 | ❌ Not Running | http://localhost:8000 |
| Frontend | 3000 | ❌ Not Running | http://localhost:3000 |

## 🎯 Quick Access URLs

Once all servers are running:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api/
- **API Documentation:** http://localhost:8000/docs
- **MongoDB:** mongodb://localhost:27017

## 🔧 Change Ports (If Needed)

### Change Backend Port
```powershell
# In backend directory
uvicorn server:app --reload --port 8001
```

Then update `frontend/.env`:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Change Frontend Port
```powershell
# In frontend directory
set PORT=3001
npm start

# Or create/update frontend/.env
PORT=3001
```

Then update `backend/.env` CORS_ORIGINS:
```
CORS_ORIGINS=http://localhost:3001,http://localhost:3000
```

## 🐛 Troubleshooting

### Port Already in Use
If a port is already in use:

```powershell
# Find what's using the port
netstat -ano | findstr ":8000"

# Kill the process (replace <PID> with actual process ID)
taskkill /PID <PID> /F

# Or change to a different port
```

### Port Not Accessible
- Check firewall settings
- Verify the service is actually running
- Check for port conflicts
- Verify .env files are correct

---

**Current Status:**
- ✅ MongoDB: Running on port 27017
- ❌ Backend: Not running (should be on port 8000)
- ❌ Frontend: Not running (should be on port 3000)

**To start your application, run both backend and frontend servers!**

