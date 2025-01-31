from fastapi import FastAPI
from .database import engine
from . import models
from .routes import router as api_router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(api_router, prefix="/api", tags=["api"])

@app.get("/")
async def read_root():
    return {"Hello": "World"}
