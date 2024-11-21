import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Reset = () => {
  const location = useLocation();
  const email = location?.state?.email || "";

  const handleReset = () => {
    
    alert(`Reset link sent to: ${email}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Reset || Career Goals</title>
      </Helmet>
      <div className="w-full hidden md:block lg:w-1/2 p-4">
        <img
          className="w-full h-auto rounded shadow-md"
          src="https://www.shutterstock.com/shutterstock/photos/1785521012/display_1500/stock-vector-woman-choosing-between-healthy-and-unhealthy-food-character-thinking-over-organic-or-junk-snacks-1785521012.jpg"
          alt="Illustration"
        />
      </div>

      <div className="w-full lg:w-1/3 bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            defaultValue={email}
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <a href="https://mail.google.com/" target="_blank">
        <button
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>
        </a>
      </div>
    </div>
  );
};

export default Reset;
