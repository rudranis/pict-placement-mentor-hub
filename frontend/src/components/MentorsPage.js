import React from "react";
import MentorProfile from "../pages/MentorProfilePage";
import { mentorData } from "../data/mentorData"; // Import mentor data

function MentorsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Mentors
        </h2>

        {/* Mentor Profile Card */}
        <div className="flex flex-wrap justify-center gap-8">
          <MentorProfile mentor={mentorData} />
        </div>
      </section>
    </div>
  );
}

export default MentorsPage;
