# Frontend Startup Script
Write-Host "🚀 Starting Frontend Server..." -ForegroundColor Green
Write-Host ""

# Change to script directory
cd $PSScriptRoot

# Start server
Write-Host "✅ Frontend server starting on http://localhost:3000" -ForegroundColor Green
Write-Host ""

npm start

