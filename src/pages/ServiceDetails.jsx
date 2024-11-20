import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [Feedback, setFeedback] = useState([])
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
    e.preventDefault()
    const comment = e.target.comment.value;
    setFeedback([...Feedback, comment])
  }
  return (
    <div>
      {/* <div>
                <img src={image} alt="" />
            </div> */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Image Section */}
        <img src={image} alt={serviceName} className="w-full" />
        {/* Content Section */}
        <div className="p-5">
          {/* Service Name */}
          <h2 className="text-2xl font-semibold text-gray-800">
            {serviceName}
          </h2>
          {/* Category */}
          <p className="text-sm text-gray-500 mt-1">Category: {category}</p>
          {/* Description */}
          <p className="text-gray-700 mt-3">{description}</p>
          {/* Pricing & Duration */}
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Price:</span> {pricing}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Duration:</span> {duration}
            </p>
          </div>
          {/* Counselor & Rating */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-600">
              <span className="font-bold">Counselor:</span> {counselor}
            </p>
            <div className="flex items-center text-yellow-500">
              <span className="text-lg font-bold">{rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.428 8.2 1.191-5.934 5.781 1.4 8.178-7.334-3.856-7.334 3.856 1.4-8.178-5.934-5.781 8.2-1.191z" />
              </svg>
            </div>
          </div>
          {/* Action Button */}
          <div className="my-4">
            <p className="text-xl font-semibold">Your feed is appear here...</p>
            {Feedback.map((f, id) => <p className="text-gray-500 font-medium" key={id}>{f}</p>)}
          </div>
          <div className="mt-6">
            <p className="text-green-600 font-medium">Share your opinions</p>
           <form onSubmit={handleFeedback}>
           <div className="flex justify-start items-center gap-4">
           <input
              type="text"
              name="comment"
              placeholder="Type here"
              className="input input-bordered input-lg w-full max-w-xs"
            />
            <button className="btn btn-primary">Feedback</button>
           </div>
           </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
