from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Profile Models
class Education(BaseModel):
    institution: str
    degree: str
    start_year: int
    status: str

class Location(BaseModel):
    city: str
    postal_code: str
    state: str
    country: str

class Profile(BaseModel):
    name: str
    username: str
    email: EmailStr
    phone: str
    title: str
    bio: str
    location: str
    age: int
    github: str
    linkedin: str
    avatar: str
    education: Education
    total_repos: int = 12
    followers: int = 0
    following: int = 1
    contributions: int = 44

# Project Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    description: str
    long_description: str
    tech: List[str]
    category: str
    github: Optional[str] = None
    live_url: Optional[str] = None
    featured: bool = False
    accent_color: str
    image: Optional[str] = None
    status: str
    year: int
    highlights: List[str]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    slug: str
    description: str
    long_description: str
    tech: List[str]
    category: str
    github: Optional[str] = None
    live_url: Optional[str] = None
    featured: bool = False
    accent_color: str
    image: Optional[str] = None
    status: str
    year: int
    highlights: List[str]

# Contact Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "unread"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Skills Models
class Skill(BaseModel):
    name: str
    level: int
    category: str

class SkillCategory(BaseModel):
    category: str
    skills: List[Skill]

# Stats Models
class Stats(BaseModel):
    label: str
    value: str
    icon: str

# Experience Models
class Experience(BaseModel):
    id: int
    title: str
    description: str
    period: str
    highlights: List[str]
