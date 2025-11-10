# Backend Startup Script
Write-Host "🚀 Starting Backend Server..." -ForegroundColor Green
Write-Host ""

# Change to script directory
cd $PSScriptRoot

# Activate virtual environment
Write-Host "📦 Activating virtual environment..." -ForegroundColor Cyan
.\venv\Scripts\Activate.ps1

# Start server
Write-Host "✅ Backend server starting on http://localhost:8000" -ForegroundColor Green
Write-Host "📚 API Docs: http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host ""

uvicorn server:app --reload --port 8000

