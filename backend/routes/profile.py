from fastapi import APIRouter, HTTPException
from models import Profile, Education
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Profile data
profile_data = Profile(
    name="Hamdan Ahmad Khan",
    username="hamdanahmadkhan101-tech",
    email="hamdanahmadkhan101@gmail.com",
    phone="03447230306",
    title="Full Stack Developer",
    bio="24-year-old Computer Science student from University of Swat, passionate about building modern, scalable web applications. Experienced in MERN stack development with a focus on creating intuitive user experiences and real-world solutions.",
    location="Odigram Swat, KPK, Pakistan",
    age=24,
    github="https://github.com/hamdanahmadkhan101-tech",
    linkedin="https://www.linkedin.com/in/hamdan-ahmad-khan-a48407384",
    avatar="https://avatars.githubusercontent.com/u/222951084?v=4",
    education=Education(
        institution="University of Swat",
        degree="Bachelor of Computer Science",
        start_year=2022,
        status="In Progress"
    ),
    total_repos=12,
    followers=0,
    following=1,
    contributions=44
)

@router.get("/profile")
async def get_profile():
    """Get profile information"""
    try:
        return profile_data.dict()
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch profile")
