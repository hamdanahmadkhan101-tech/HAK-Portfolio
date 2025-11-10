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
        description="Developed and deployed a comprehensive travel booking platform with AI-powered features",
        period="2024 - Present",
        highlights=[
            "Built scalable MERN stack application for travel bookings",
            "Integrated AI tour planner for personalized itineraries",
            "Implemented hotel, restaurant, and transportation booking systems",
            "Designed interactive map routes with real-time destinations",
            "Delivered production-ready application serving real customers"
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
