import React from "react";
import { Link } from "react-router-dom";
import { mentorData } from "../data/mentorData";

function MentorsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Mentors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {mentorData.map((mentor) => (
            <div
              key={mentor.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg w-72"
            >
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {mentor.name}
              </h3>
              <p className="text-sm">
                <strong>Department:</strong> {mentor.department}
              </p>
              <p className="text-sm">
                <strong>Company:</strong> {mentor.company}
              </p>
              <Link
                to={`/features/mentor-profile/${mentor.id}`}
                className="text-blue-400 underline mt-4 block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MentorsPage;
