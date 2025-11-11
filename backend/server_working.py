from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "healthy", "message": "Portfolio API is running"}

@app.get("/api/")
async def api_root():
    return {"message": "API is working", "version": "1.0.0"}

@app.get("/api/profile")
async def get_profile():
    return {
        "name": "Hamdan Ahmad Khan",
        "username": "hamdanahmadkhan101-tech",
        "email": "hamdanahmadkhan101@gmail.com",
        "phone": "03447230306",
        "title": "Full Stack Developer",
        "bio": "24-year-old Computer Science student from University of Swat, passionate about building modern, scalable web applications.",
        "location": "Odigram Swat, KPK, Pakistan",
        "age": 24,
        "github": "https://github.com/hamdanahmadkhan101-tech",
        "linkedin": "https://www.linkedin.com/in/hamdan-ahmad-khan-a48407384",
        "avatar": "https://avatars.githubusercontent.com/u/222951084?v=4"
    }

@app.get("/api/projects")
async def get_projects():
    return [
        {
            "id": "1",
            "title": "Portfolio Website",
            "description": "Modern portfolio built with React and FastAPI",
            "tech": ["React", "FastAPI", "MongoDB", "Tailwind CSS"],
            "github": "https://github.com/hamdanahmadkhan101-tech/portfolio",
            "featured": True,
            "status": "completed",
            "year": 2024
        }
    ]

@app.get("/api/skills")
async def get_skills():
    return [
        {"category": "Frontend", "skills": [
            {"name": "React", "level": 90},
            {"name": "JavaScript", "level": 85},
            {"name": "HTML/CSS", "level": 95}
        ]},
        {"category": "Backend", "skills": [
            {"name": "Python", "level": 80},
            {"name": "FastAPI", "level": 75},
            {"name": "MongoDB", "level": 70}
        ]}
    ]

@app.post("/api/contact")
async def submit_contact(data: dict):
    logger.info(f"Contact form submitted: {data}")
    return {"message": "Message sent successfully"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)