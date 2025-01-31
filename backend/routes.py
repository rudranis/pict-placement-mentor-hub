from fastapi import APIRouter, Depends, HTTPException
from .models import User, Mentor, Session, UserProfile, Resource
from .auth import get_db, verify_token, hash_password
from .database import get_db
from .schemas import UserProfileCreate, UserProfileOut, ResourceCreate, ResourceOut, UserCreate, UserOut
from sqlalchemy.exc import IntegrityError
from fastapi.responses import JSONResponse
from .scheduler import router as scheduler_router

router = APIRouter()

router.include_router(scheduler_router, prefix="/scheduler", tags=["scheduler"])

@router.post('/register', response_model=UserOut)
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password)  
    )
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Username or email already registered")

@router.get('/mentors')
async def get_mentors(db: Session = Depends(get_db)):
    mentors = db.query(Mentor).all()
    return mentors

@router.get('/sessions')
async def get_sessions(db: Session = Depends(get_db)):
    sessions = db.query(Session).all()
    return sessions

@router.post("/profiles/", response_model=UserProfileOut)
def create_user_profile(profile: UserProfileCreate, db: Session = Depends(get_db)):
    db_profile = UserProfile(**profile.dict())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

@router.get("/profiles/{user_id}", response_model=UserProfileOut)
def read_user_profile(user_id: int, db: Session = Depends(get_db)):
    return db.query(UserProfile).filter(UserProfile.user_id == user_id).first()

@router.put("/profiles/{user_id}", response_model=UserProfileOut)
def update_user_profile(user_id: int, profile: UserProfileCreate, db: Session = Depends(get_db)):
    db_profile = db.query(UserProfile).filter(UserProfile.user_id == user_id).first()
    for key, value in profile.dict().items():
        setattr(db_profile, key, value)
    db.commit()
    return db_profile

@router.delete("/profiles/{user_id}")
def delete_user_profile(user_id: int, db: Session = Depends(get_db)):
    db_profile = db.query(UserProfile).filter(UserProfile.user_id == user_id).first()
    db.delete(db_profile)
    db.commit()
    return {"message": "Profile deleted"}

@router.post("/resources/", response_model=ResourceOut)
async def upload_resource(resource: ResourceCreate, db: Session = Depends(get_db)):
    db_resource = Resource(**resource.dict())
    db.add(db_resource)
    db.commit()
    db.refresh(db_resource)
    return db_resource

@router.get("/resources/")
async def get_resources(db: Session = Depends(get_db)):
    return db.query(Resource).all()
