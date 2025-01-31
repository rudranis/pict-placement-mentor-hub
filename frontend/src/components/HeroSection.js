import React from "react";

function HeroSection() {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative text-center z-10">
        <h1 className="text-6xl font-extrabold mb-6">
          Welcome to Placement Mentor Hub
        </h1>
        <p className="text-xl font-light mb-8">
          Your pathway to placement success starts here.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
