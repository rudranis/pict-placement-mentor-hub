from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from .database import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    mentor_id = Column(Integer, nullable=False)
    mentee_id = Column(Integer, nullable=False)
    scheduled_time = Column(DateTime, nullable=False)

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .database import get_db
from .models import Appointment
from .schemas import AppointmentCreate

router = APIRouter()

@router.post("/appointments/")
def create_appointment(appointment: AppointmentCreate, db: Session = Depends(get_db)):
    db_appointment = Appointment(**appointment.dict())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

@router.get("/appointments/{mentor_id}")
def get_appointments(mentor_id: int, db: Session = Depends(get_db)):
    return db.query(Appointment).filter(Appointment.mentor_id == mentor_id).all()
