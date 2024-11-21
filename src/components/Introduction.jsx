import React from "react";

const Introduction = () => {
  return (
    <section className="bg-blue-50 py-10 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          Welcome to the Career Planner
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Your journey to success starts here! Create a personalized roadmap for your dream career 
          with our easy-to-use tools and expert guidance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co.com/NCgRGDF/pexels-fauxels-3184292.jpg"
            alt="Career Planning"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-blue-600">
            Plan Your Career With Confidence
          </h2>
          <p className="mt-4 text-gray-700">
            Use our interactive roadmap builder to set your goals, identify the skills you need, and 
            take actionable steps towards your dream career. Whether you're just starting out or 
            planning a career change, we've got you covered!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
            Start Planning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
