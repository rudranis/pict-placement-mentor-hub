import React from "react";
import { Link } from "react-router-dom"; // Add this line

const SignUpSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Sign Up Successful!
        </h2>
        <p className="mb-4 dark:text-gray-300">
          Thank you for signing up! You can now log in and start your journey
          with us.
        </p>
        <Link to="/login" className="text-blue-600 hover:underline">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpSuccess;
