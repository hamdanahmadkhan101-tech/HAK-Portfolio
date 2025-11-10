from fastapi import APIRouter, HTTPException
from typing import List
from models import Experience
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Experience data
experience_data = [
    Experience(
        id=1,
        title="Full Stack Developer - Khan Familia Travels",
        description="Modern, scalable travel booking platform for Khan Familia Travels (KFT) featuring AI-powered tour planning, hotel/restaurant bookings, and comprehensive transportation services. Currently in development phase, architecting an enterprise-grade solution that will revolutionize the travel booking experience with cutting-edge technology and user-centric design.",
        period="2024 - Present",
        highlights=[
            "Designing and developing scalable MERN stack application for multiple booking services",
            "Planning AI-powered tour planner integration for personalized tourist itineraries",
            "Building comprehensive booking systems for hotels, restaurants, and transportation",
            "Implementing interactive map integration with real-time route planning features",
            "Establishing robust API architecture for future scalability and integrations",
            "Focusing on performance optimization and user experience design",
            "Preparing production-ready deployment infrastructure"
        ]
    ),
    Experience(
        id=2,
        title="Computer Science Student - University of Swat",
        description="Pursuing Bachelor's degree in Computer Science with focus on web development",
        period="2022 - Present",
        highlights=[
            "Strong foundation in algorithms and data structures",
            "Active GitHub contributor with multiple projects",
            "Specialized in modern web technologies and frameworks",
            "Hands-on experience with real-world applications"
        ]
    )
]

@router.get("/experience", response_model=List[Experience])
async def get_experience():
    """Get work experience"""
    try:
        return experience_data
    except Exception as e:
        logger.error(f"Error fetching experience: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch experience")
