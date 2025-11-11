from fastapi import FastAPI
import os

app = FastAPI(title="Portfolio API", version="1.0.0")

@app.get("/")
async def root():
    return {"status": "healthy", "message": "Portfolio API is running"}

@app.get("/health")
async def health():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)