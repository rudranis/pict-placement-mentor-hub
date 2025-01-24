import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  const featuresSectionRef = useRef(null);
  const navigate = useNavigate();

  const handleExploreNowClick = () => {
    featuresSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGetStartedClick = () => {
    navigate("/features"); // Redirect to the Features page route
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pict-campus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img
            src="/images/pict-logo.png"
            alt="PICT Logo"
            className="w-20 mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            PICT Placement Mentor Hub
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Your gateway to placement success with guidance from PICT alumni and
            mentors.
          </p>
          <button
            onClick={handleExploreNowClick}
            className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
          >
            Explore Now
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="py-12 bg-gray-800">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">👨‍🏫 Mentor Profiles</h3>
            <p>Connect with experienced mentors for personalized guidance.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">
              ❓ Interview Questions
            </h3>
            <p>Access curated questions for your dream companies.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">🌟 Success Stories</h3>
            <p>Get inspired by real stories of placement success.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">📣 Placement Alerts</h3>
            <p>Stay updated with the latest placement opportunities.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">
          Start Your Journey Today
        </h2>
        <p className="mb-6 text-lg">
          Take the first step towards placement success with guidance from
          mentors and resources.
        </p>
        <button
          onClick={handleGetStartedClick} // Navigate to Features page
          className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
