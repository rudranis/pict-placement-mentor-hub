import React, { useState } from "react";
import axios from "axios";

const Calendar = () => {
  const [date, setDate] = useState("");
  const [mentorId, setMentorId] = useState("");

  const handleSchedule = async () => {
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/scheduler/appointments/", {
      mentor_id: mentorId,
      scheduled_time: date,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <input type="text" placeholder="Mentor ID" value={mentorId} onChange={(e) => setMentorId(e.target.value)} />
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

export default Calendar;
