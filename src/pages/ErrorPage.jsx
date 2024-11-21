import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-700 mb-6">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
