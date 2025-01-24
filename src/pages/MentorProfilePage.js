import React from "react";
import { useParams } from "react-router-dom";
import { mentorData } from "../data/mentorData";

const MentorProfilePage = () => {
  const { mentorId } = useParams();
  const mentor = mentorData.find((mentor) => mentor.id === mentorId);

  if (!mentor) {
    return (
      <div className="text-center text-red-500 mt-10">Mentor not found!</div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Mentor Profile: {mentor.name}
        </h2>

        <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">
            Basic Info
          </h3>
          <p>
            <strong>Name:</strong> {mentor.name}
          </p>
          <p>
            <strong>Department:</strong> {mentor.department}
          </p>
          <p>
            <strong>Company:</strong> {mentor.company}
          </p>

          <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">
            Interview Questions
          </h3>
          <ul className="space-y-2">
            {mentor.interviewQuestions.map((question, index) => (
              <li key={index} className="text-sm">
                {question}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">
            Preparation Resources
          </h3>
          <ul className="space-y-2">
            {mentor.resources.map((resource, index) => (
              <li key={index} className="text-sm">
                <strong>{resource.platform}:</strong>{" "}
                <a
                  href={resource.details}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {resource.details}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MentorProfilePage;
