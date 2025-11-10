# Portfolio Application

A modern, full-stack portfolio application built with React (Frontend) and FastAPI (Backend) with MongoDB integration.

## Features

- ✅ Responsive design with modern UI
- ✅ Profile information display
- ✅ Projects showcase with filtering
- ✅ Skills visualization with progress bars
- ✅ Work experience timeline
- ✅ Contact form with email notifications
- ✅ Statistics dashboard
- ✅ MongoDB integration for contact messages

## Tech Stack

### Backend
- FastAPI
- MongoDB (Motor - Async MongoDB driver)
- Python 3.8+
- Email service (SMTP)

### Frontend
- React 18
- Tailwind CSS
- Framer Motion (animations)
- Axios (API client)
- Lucide React (icons)

## Setup Instructions

### Prerequisites
- Python 3.8 or higher
- Node.js 16 or higher
- MongoDB (running locally or remote)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the `backend` directory:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio_db
CORS_ORIGINS=http://localhost:3000,http://localhost:3001

# Optional: Email Configuration (for production)
# SMTP_SERVER=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASSWORD=your-app-password
# ADMIN_EMAIL=hamdanahmadkhan101@gmail.com
```

5. Make sure MongoDB is running:
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas connection string in MONGO_URL
```

6. Start the backend server:
```bash
uvicorn server:app --reload --port 8000
```

The backend API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `frontend` directory:
```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

4. Start the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`

## Project Structure

```
app/
├── backend/
│   ├── routes/          # API route handlers
│   ├── models.py        # Pydantic models
│   ├── server.py        # FastAPI application
│   ├── email_service.py # Email service
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API service layer
│   │   ├── lib/         # Utility functions
│   │   └── App.js       # Main app component
│   ├── public/          # Static files
│   └── package.json     # Node dependencies
└── README.md
```

## API Endpoints

### Profile
- `GET /api/profile` - Get profile information

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured=true` - Get featured projects
- `GET /api/projects/{slug}` - Get project by slug

### Skills
- `GET /api/skills` - Get all skills categorized

### Stats
- `GET /api/stats` - Get portfolio statistics

### Experience
- `GET /api/experience` - Get work experience

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

## Development

### Backend Development
```bash
cd backend
uvicorn server:app --reload --port 8000
```

### Frontend Development
```bash
cd frontend
npm start
```

### Testing Backend
```bash
python backend_test.py
```

## Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Install dependencies: `pip install -r requirements.txt`
3. Run with: `uvicorn server:app --host 0.0.0.0 --port 8000`

### Frontend Deployment
1. Build the production bundle: `npm run build`
2. Deploy the `build` folder to your hosting platform
3. Update `REACT_APP_BACKEND_URL` in `.env` to point to your production backend

## Notes

- The email service is currently set to log messages. Configure SMTP settings in `.env` for production.
- MongoDB connection is required for the contact form to work.
- CORS is configured to allow requests from the frontend origin.

## License

This project is private and personal.

## Author

**Hamdan Ahmad Khan**
- Email: hamdanahmadkhan101@gmail.com
- GitHub: [hamdanahmadkhan101-tech](https://github.com/hamdanahmadkhan101-tech)
- LinkedIn: [Hamdan Ahmad Khan](https://www.linkedin.com/in/hamdan-ahmad-khan-a48407384)
