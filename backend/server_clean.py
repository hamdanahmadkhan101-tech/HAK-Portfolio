from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

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
        "title": "Full Stack Developer",
        "email": "hamdanahmadkhan101@gmail.com"
    }

@app.get("/api/projects")
async def get_projects():
    return [
        {"id": 1, "name": "Portfolio", "tech": "React, FastAPI"},
        {"id": 2, "name": "E-commerce", "tech": "Node.js, MongoDB"}
    ]