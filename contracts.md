# Backend Integration Contracts

## Overview
Converting the portfolio from mock data to full-stack application with MongoDB backend and email notifications.

## Data Models

### 1. Profile Model
```python
{
  "name": "Hamdan Ahmad Khan",
  "email": "hamdanahmadkhan101@gmail.com",
  "phone": "03447230306",
  "title": "Full Stack Developer",
  "bio": "24-year-old Computer Science student from University of Swat, passionate about building modern, scalable web applications. Experienced in MERN stack development with a focus on creating intuitive user experiences.",
  "location": {
    "city": "Odigram Swat",
    "postal_code": "19200",
    "state": "Khyber Pakhtunkhwa (KPK)",
    "country": "Pakistan"
  },
  "age": 24,
  "github": "https://github.com/hamdanahmadkhan101-tech",
  "linkedin": "https://www.linkedin.com/in/hamdan-ahmad-khan-a48407384",
  "avatar": "https://avatars.githubusercontent.com/u/222951084?v=4",
  "education": {
    "institution": "University of Swat",
    "degree": "Bachelor of Computer Science",
    "start_year": 2022,
    "status": "In Progress"
  }
}
```

### 2. Project Model
```python
{
  "id": auto_generated,
  "title": str,
  "slug": str,
  "description": str,
  "long_description": str,
  "tech": [str],
  "category": str,
  "github": str (optional),
  "live_url": str (optional),
  "featured": bool,
  "accent_color": str,
  "image": str (optional),
  "status": str,
  "year": int,
  "highlights": [str],
  "created_at": datetime,
  "updated_at": datetime
}
```

### 3. Contact Message Model
```python
{
  "id": auto_generated,
  "name": str,
  "email": str,
  "subject": str,
  "message": str,
  "status": str (unread/read),
  "created_at": datetime
}
```

### 4. Skills Model
```python
{
  "category": str (frontend/backend/tools),
  "skills": [
    {
      "name": str,
      "level": int (0-100),
      "category": str
    }
  ]
}
```

## API Endpoints

### Profile Endpoints
- `GET /api/profile` - Get profile information
- `PUT /api/profile` - Update profile (admin only - future)

### Projects Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured=true` - Get featured projects only
- `GET /api/projects/{slug}` - Get single project by slug
- `POST /api/projects` - Create new project (admin only - future)

### Skills Endpoints
- `GET /api/skills` - Get all skills categorized

### Contact Endpoints
- `POST /api/contact` - Submit contact form (saves to DB + sends email)
- `GET /api/contact` - Get all messages (admin only - future)

### Stats Endpoints
- `GET /api/stats` - Get portfolio stats (projects count, GitHub contributions, etc.)

## Email Integration

### Email Service Setup
- Use SMTP for email notifications
- When contact form submitted:
  1. Save message to MongoDB
  2. Send email notification to: hamdanahmadkhan101@gmail.com
  3. Send auto-reply to user confirming message received

### Email Template
**Subject:** New Contact Form Submission from Portfolio

**Body:**
```
New message from your portfolio:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
Received at: {timestamp}
```

## Frontend Integration Changes

### Files to Update:
1. `/app/frontend/src/utils/mockData.js` → Update with real data
2. `/app/frontend/src/components/Contact.jsx` → Connect to API endpoint
3. Create `/app/frontend/src/services/api.js` → Centralized API calls

### API Service Structure:
```javascript
// api.js
const API_URL = process.env.REACT_APP_BACKEND_URL;

export const api = {
  getProfile: () => axios.get(`${API_URL}/api/profile`),
  getProjects: () => axios.get(`${API_URL}/api/projects`),
  getSkills: () => axios.get(`${API_URL}/api/skills`),
  getStats: () => axios.get(`${API_URL}/api/stats`),
  submitContact: (data) => axios.post(`${API_URL}/api/contact`, data)
};
```

## Featured Projects Data

### Project 1: KFT Travel Application (Real Experience)
- Title: "Khan Familia Travels Platform"
- Description: "Modern, scalable travel booking platform with AI-powered tour planning"
- Tech: MERN Stack (MongoDB, Express.js, React, Node.js), AI Integration
- Features: Hotel/restaurant booking, car/taxi booking, map routes, AI tour planner
- Status: Active/In Production
- Category: Full Stack
- Accent Color: #00D9FF

### Project 2: Task Manager (GitHub)
- From: https://github.com/hamdanahmadkhan101-tech/Projects
- Keep existing data

### Project 3: Todo Next.js (GitHub)
- From: https://github.com/hamdanahmadkhan101-tech/todo-nextjs
- Keep existing data

### Project 4: Currency Exchange App (GitHub)
- From: https://github.com/hamdanahmadkhan101-tech/Currency-Exchange-App
- Keep existing data

## Implementation Steps

1. ✅ Create contracts.md (this file)
2. Update mockData.js with real information
3. Build backend models and routes
4. Implement email service
5. Create API service in frontend
6. Update Contact component to use real API
7. Test backend with curl
8. Test frontend integration
9. Verify email notifications work

## Notes
- MongoDB is already configured at localhost:27017
- Database name: test_database
- All mock data will be replaced with real data
- Manual project management (not fetching from GitHub API)
- Email notifications required for contact form
