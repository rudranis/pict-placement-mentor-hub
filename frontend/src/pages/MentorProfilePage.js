import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MentorProfilePage = () => {
  const { mentorId } = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/mentors/${mentorId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch mentor data");
        }
        const data = await response.json();
        setMentor(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorData();
  }, [mentorId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  if (!mentor) {
    return <div className="text-center text-red-500 mt-10">Mentor not found!</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Mentor Profile: {mentor.name}
        </h2>
        {/* Additional mentor details can be displayed here */}
      </section>
    </div>
  );
};

export default MentorProfilePage;
