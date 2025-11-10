from fastapi import APIRouter, HTTPException
from typing import List
from models import Stats
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Stats data
stats_data = [
    Stats(label="Projects Completed", value="12+", icon="code"),
    Stats(label="GitHub Contributions", value="44", icon="git-commit"),
    Stats(label="Years of Experience", value="2+", icon="calendar"),
    Stats(label="Technologies Mastered", value="15+", icon="layers")
]

@router.get("/stats", response_model=List[Stats])
async def get_stats():
    """Get portfolio stats"""
    try:
        return stats_data
    except Exception as e:
        logger.error(f"Error fetching stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch stats")
