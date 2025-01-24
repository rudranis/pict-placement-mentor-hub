import React from "react";
import { Link } from "react-router-dom";
import { mentorData } from "../data/mentorData";

const MentorListPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Mentor Profiles
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorData.map((mentor) => (
            <Link
              to={`/features/mentor-profile/${mentor.id}`}
              key={mentor.id}
              className="block bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {mentor.name}
              </h3>
              <p>
                <strong>Department:</strong> {mentor.department}
              </p>
              <p>
                <strong>Company:</strong> {mentor.company}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MentorListPage;
