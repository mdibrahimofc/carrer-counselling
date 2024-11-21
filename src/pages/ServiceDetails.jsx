import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [feedback, setFeedback] = useState([]);
  const params = useParams();
  const id = params.id;
  const AllData = useLoaderData();
  const data = AllData.services;
  const details = data.find((d) => d.id == id);
  const {
    image,
    pricing,
    serviceName,
    category,
    counselor,
    duration,
    rating,
    description,
  } = details;

  const handleFeedback = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const stars = e.target.stars.value;
    setFeedback([...feedback, { comment, stars }]);
    e.target.comment.value = "";
    e.target.stars.value = "1";
  };

  return (
    <div>
      <Helmet>
        <title>Service Details || Career Goals</title>
      </Helmet>

      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-96 object-cover rounded-t-lg"
        />

        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 transition-all duration-300 hover:text-blue-600 hover:underline cursor-pointer">
            {serviceName}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
          <p className="text-gray-700 mt-3">{description}</p>

          <div className="mt-6 flex justify-between items-center text-gray-600">
            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="font-semibold text-green-600">{pricing}</span>
            </p>
            <p className="transition-all duration-300 hover:text-green-600">
              <span className="font-semibold">Duration:</span> {duration}
            </p>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">
              <span className="font-semibold">Counselor:</span> {counselor}
            </p>
            <div className="flex items-center text-yellow-500">
              <span className="text-lg font-semibold">{rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.428 8.2 1.191-5.934 5.781 1.4 8.178-7.334-3.856-7.334 3.856 1.4-8.178-5.934-5.781 8.2-1.191z" />
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-800 transition-all duration-300 hover:text-blue-600">
              Customer Feedback
            </p>
            {feedback.length > 0 ? (
              feedback.map((f, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg my-2 shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < f.stars ? "currentColor" : "none"}
                          stroke={i < f.stars ? "currentColor" : "#ddd"}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.428 8.2 1.191-5.934 5.781 1.4 8.178-7.334-3.856-7.334 3.856 1.4-8.178-5.934-5.781 8.2-1.191z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      Rated by User {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-500 transition-all duration-300 hover:text-gray-700">
                    {f.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                No feedback yet. Be the first to review!
              </p>
            )}
          </div>

          <div className="mt-6">
            <p className="text-green-600 font-medium transition-all duration-300 hover:text-green-700">
              Share your opinion
            </p>
            <form onSubmit={handleFeedback} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {/* Star Rating */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <div>
                  <label
                    htmlFor="stars"
                    className="font-semibold text-gray-700"
                  >
                    Rate the service:{" "}
                  </label>
                  <select
                    name="stars"
                    id="stars"
                    className="select select-bordered select-sm"
                    defaultValue="1"
                  >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <input
                      type="text"
                      name="comment"
                      placeholder="Type your feedback here"
                      className="input input-bordered input-lg w-full max-w-xl focus:outline-none transition-all duration-300 ease-in-out hover:shadow-xl"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-primary px-6 hover:bg-blue-700 transition-all duration-300"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
