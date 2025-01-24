import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const featuresRef = useRef(null); // Ref for key features section

  const handleExploreNowClick = () => {
    if (featuresRef.current) {
      window.scrollTo({
        top: featuresRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Toggle for profile dropdown
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/pict-logo.png"
              alt="PICT Logo"
              className="w-14 h-14 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <Link
              to="/"
              className="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              PICT Mentor Hub
            </Link>
          </div>

          {/* Right side: Navigation Links */}
          <div className="hidden md:flex space-x-8 ml-auto">
            {/* Explore Now - Scrolls to Key Features */}
            <button
              onClick={handleExploreNowClick}
              className="text-white hover:text-yellow-300 px-4 py-2 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Explore Now
            </button>
            <Link
              to="/features"
              className="text-white hover:text-yellow-300 px-4 py-2 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
            {/* Mentor Profile - Links to the Mentor Profile */}
            <Link
              to="/features/mentor-profile/1" // Example mentorId
              className="text-white hover:text-yellow-300 px-4 py-2 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Mentor Profile
            </Link>
            <Link
              to="/success-stories"
              className="text-white hover:text-yellow-300 px-4 py-2 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Success Stories
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 px-4 py-2 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>

          {/* Profile Circle and Dropdown */}
          <div className="relative ml-8">
            <button
              onClick={toggleProfileMenu}
              className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm hover:bg-gray-700"
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
