from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from models import Project
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

# Projects data
projects_data = [
    Project(
        id="1",
        title="Khan Familia Travels Platform",
        slug="kft-travel-platform",
        description="Modern, scalable travel booking platform for Khan Familia Travels (KFT) featuring AI-powered tour planning, hotel/restaurant bookings, and comprehensive transportation services.",
        long_description="Enterprise-grade travel application built for Khan Familia Travels, combining multiple booking services into a unified platform. Features include hotel and restaurant reservations, car and taxi booking, interactive map routes with real-time destinations, and an AI-integrated tour planner that creates personalized itineraries for tourists. Built with the MERN stack to ensure scalability and performance.",
        tech=["MongoDB", "Express.js", "React", "Node.js", "AI Integration", "Maps API"],
        category="Full Stack",
        github=None,
        live_url=None,
        featured=True,
        accent_color="#00D9FF",
        image=None,
        status="In Production",
        year=2024,
        highlights=[
            "Hotel & restaurant booking system",
            "Car and taxi reservation platform",
            "Interactive map routes and destinations",
            "AI-powered tour planner for personalized itineraries",
            "Built with MERN stack for scalability",
            "Real-time availability tracking"
        ]
    ),
    Project(
        id="2",
        title="Task Manager Application",
        slug="task-manager",
        description="A full-featured task management system built with Node.js and EJS. Features include task creation, editing, updating, and real-time status tracking.",
        long_description="Comprehensive task management solution with intuitive UI/UX. Allows users to create, edit, update, and delete tasks efficiently. Built with Express.js backend and EJS templating for server-side rendering.",
        tech=["Node.js", "Express", "EJS", "JavaScript", "CSS"],
        category="Full Stack",
        github="https://github.com/hamdanahmadkhan101-tech/Projects",
        live_url=None,
        featured=True,
        accent_color="#00FF88",
        image=None,
        status="Complete",
        year=2025,
        highlights=[
            "CRUD operations for task management",
            "Server-side rendering with EJS",
            "RESTful API architecture",
            "Responsive design"
        ]
    ),
    Project(
        id="3",
        title="Todo App with Next.js",
        slug="todo-nextjs",
        description="Modern todo application built with Next.js 15 and TypeScript. Features type-safe code, server components, and optimized performance.",
        long_description="Next-generation todo app leveraging the latest Next.js features including App Router, Server Components, and TypeScript for type safety. Implements modern React patterns and best practices.",
        tech=["Next.js", "TypeScript", "React", "CSS", "JavaScript"],
        category="Frontend",
        github="https://github.com/hamdanahmadkhan101-tech/todo-nextjs",
        live_url=None,
        featured=True,
        accent_color="#FF6B6B",
        image=None,
        status="Complete",
        year=2025,
        highlights=[
            "Built with Next.js 15 App Router",
            "Type-safe with TypeScript",
            "Server Components for optimal performance",
            "Modern React patterns"
        ]
    ),
    Project(
        id="4",
        title="Currency Exchange App",
        slug="currency-exchange-app",
        description="Real-time currency converter using live exchange rates. Clean vanilla JavaScript implementation with API integration.",
        long_description="Currency conversion application that fetches real-time exchange rates from external APIs. Features currency selection, conversion calculations, and a clean, user-friendly interface built with vanilla JavaScript.",
        tech=["JavaScript", "HTML", "CSS", "REST API"],
        category="Frontend",
        github="https://github.com/hamdanahmadkhan101-tech/Currency-Exchange-App",
        live_url=None,
        featured=False,
        accent_color="#FFB800",
        image=None,
        status="Complete",
        year=2024,
        highlights=[
            "Real-time currency conversion",
            "API integration for live rates",
            "Vanilla JavaScript implementation",
            "Responsive UI design"
        ]
    )
]

@router.get("/projects", response_model=List[Project])
async def get_projects(featured: Optional[bool] = Query(None)):
    """Get all projects or filter by featured"""
    try:
        if featured is not None:
            return [p for p in projects_data if p.featured == featured]
        return projects_data
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@router.get("/projects/{slug}", response_model=Project)
async def get_project_by_slug(slug: str):
    """Get single project by slug"""
    try:
        project = next((p for p in projects_data if p.slug == slug), None)
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return project
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch project")
