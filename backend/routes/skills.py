from fastapi import APIRouter, HTTPException
from typing import List
from models import SkillCategory, Skill
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Skills data
skills_data = [
    SkillCategory(
        category="Frontend",
        skills=[
            Skill(name="JavaScript", level=90, category="Language"),
            Skill(name="TypeScript", level=85, category="Language"),
            Skill(name="React", level=85, category="Framework"),
            Skill(name="Next.js", level=80, category="Framework"),
            Skill(name="HTML/CSS", level=90, category="Core"),
            Skill(name="Tailwind CSS", level=75, category="Styling")
        ]
    ),
    SkillCategory(
        category="Backend",
        skills=[
            Skill(name="Node.js", level=85, category="Runtime"),
            Skill(name="Express.js", level=80, category="Framework"),
            Skill(name="RESTful APIs", level=80, category="Architecture"),
            Skill(name="MongoDB", level=75, category="Database")
        ]
    ),
    SkillCategory(
        category="Tools & Others",
        skills=[
            Skill(name="Git", level=85, category="Version Control"),
            Skill(name="GitHub", level=85, category="Platform"),
            Skill(name="VS Code", level=90, category="Editor"),
            Skill(name="npm/yarn", level=80, category="Package Manager")
        ]
    )
]

@router.get("/skills", response_model=List[SkillCategory])
async def get_skills():
    """Get all skills categorized"""
    try:
        return skills_data
    except Exception as e:
        logger.error(f"Error fetching skills: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch skills")
