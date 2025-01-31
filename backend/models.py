from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True}
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), unique=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    name = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)

class Mentor(Base):
    __tablename__ = 'mentors'
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    company = Column(String(255), nullable=False)
    user = relationship('User', back_populates='mentors')

class Session(Base):
    __tablename__ = 'sessions'
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    mentor_id = Column(Integer, ForeignKey('mentors.id'), nullable=False)
    student_id = Column(Integer, ForeignKey('users.id'), nullable=False)

class Resource(Base):
    __tablename__ = 'resources'
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    mentor_id = Column(Integer, ForeignKey('mentors.id'), nullable=False)
    title = Column(String(255), nullable=False)

class UserProfile(Base):
    __tablename__ = "user_profiles"
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)
    bio = Column(String(500), nullable=True)
    skills = Column(String(500), nullable=True)
    experience = Column(String(500), nullable=True)

    user = relationship("User", back_populates="profile")

class Appointment(Base):
    __tablename__ = 'appointments'
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True, index=True)
    mentor_id = Column(Integer, ForeignKey('mentors.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    scheduled_time = Column(String(255), nullable=False)  # You can use DateTime if you prefer
    status = Column(String(50), default='scheduled')  # Example status field
