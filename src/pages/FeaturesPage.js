import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturesPage() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Mentor Profiles",
      description:
        "Connect with experienced mentors for personalized guidance.",
      icon: "👨‍🏫",
      route: "/mentors", // Route to navigate
    },
    {
      title: "Interview Questions",
      description: "Access curated questions for your dream companies.",
      icon: "❓",
      route: "/interview-questions", // Route to navigate
    },
    {
      title: "Success Stories",
      description: "Get inspired by real stories of placement success.",
      icon: "🌟",
      route: "/success-stories", // Route to navigate
    },
    {
      title: "Placement Alerts",
      description: "Stay updated with the latest placement opportunities.",
      icon: "📣",
      route: "/placement-alerts", // Route to navigate
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center cursor-pointer"
              onClick={() => navigate(feature.route)} // Navigate to the feature's route
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;
