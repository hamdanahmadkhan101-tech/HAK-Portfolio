# Setup Guide

## Quick Start

### 1. Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment (recommended):**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` file:**
   Create a file named `.env` in the `backend` directory with the following content:
   ```env
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio_db
   CORS_ORIGINS=http://localhost:3000,http://localhost:3001
   ```

5. **Start MongoDB:**
   Make sure MongoDB is running on your system. If using local MongoDB:
   ```bash
   mongod
   ```
   
   Or use MongoDB Atlas and update `MONGO_URL` in `.env`:
   ```env
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db
   ```

6. **Start the backend server:**
   ```bash
   uvicorn server:app --reload --port 8000
   ```

   The API will be available at `http://localhost:8000`
   API documentation at `http://localhost:8000/docs`

### 2. Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   Create a file named `.env` in the `frontend` directory with:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8000
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`

## Verification

### Test Backend API

1. Open `http://localhost:8000/docs` in your browser to see the API documentation
2. Test the health check endpoint: `http://localhost:8000/api/`
3. Test the profile endpoint: `http://localhost:8000/api/profile`

### Test Frontend

1. Open `http://localhost:3000` in your browser
2. You should see the portfolio homepage with your profile information
3. Navigate through different sections (About, Projects, Skills, Experience, Contact)

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error:**
   - Make sure MongoDB is running
   - Check if `MONGO_URL` in `.env` is correct
   - Verify MongoDB is accessible from your machine

2. **Import Errors:**
   - Make sure you're in the `backend` directory when running the server
   - Verify all dependencies are installed: `pip install -r requirements.txt`

3. **Port Already in Use:**
   - Change the port in the uvicorn command: `uvicorn server:app --reload --port 8001`

### Frontend Issues

1. **API Connection Error:**
   - Make sure the backend server is running
   - Check `REACT_APP_BACKEND_URL` in `.env` matches your backend URL
   - Check browser console for CORS errors

2. **Module Not Found:**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **Build Errors:**
   - Clear the build cache: `npm cache clean --force`
   - Delete `node_modules` and reinstall

## Production Deployment

### Backend Deployment

1. Set environment variables on your hosting platform
2. Install dependencies: `pip install -r requirements.txt`
3. Run with: `uvicorn server:app --host 0.0.0.0 --port 8000`

### Frontend Deployment

1. Build the production bundle: `npm run build`
2. Deploy the `build` folder to your hosting platform
3. Update `REACT_APP_BACKEND_URL` in `.env` to point to your production backend

## Email Configuration (Optional)

To enable email notifications for the contact form, add the following to your backend `.env` file:

```env
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=hamdanahmadkhan101@gmail.com
```

Note: For Gmail, you'll need to generate an App Password:
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password for "Mail"
4. Use that password in `SMTP_PASSWORD`

## Support

If you encounter any issues, please check:
1. The README.md file for general information
2. The backend logs for errors
3. The browser console for frontend errors
4. MongoDB connection status

