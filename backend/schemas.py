from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True

class UserProfileCreate(BaseModel):
    bio: str
    skills: str
    experience: str

class UserProfileOut(BaseModel):
    id: int
    user_id: int
    bio: str
    skills: str
    experience: str

    class Config:
        from_attributes = True

class ResourceCreate(BaseModel):
    filename: str
    description: str

class ResourceOut(BaseModel):
    id: int
    filename: str
    description: str

    class Config:
        from_attributes = True

class AppointmentCreate(BaseModel):
    mentor_id: int
    user_id: int
    scheduled_time: str  # You can use datetime if you prefer
    status: str = 'scheduled'
