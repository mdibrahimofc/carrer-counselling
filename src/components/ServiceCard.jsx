import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    image,
    id,
    pricing,
    serviceName,
    category,
    counselor,
    description,
    rating,
    duration,
  } = service;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative">
        <img
          src={image}
          alt={counselor}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 left-2 bg-secondary text-white px-3 py-1 text-sm rounded-md">
          {category}
        </div>
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded-full">
          ⭐ {rating}
        </div>
      </figure>

      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800">{serviceName}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Counselor:</span> {counselor}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold">Duration:</span> {duration}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold">Price:</span>{" "}
            <span
              className={`font-semibold ${
                pricing === "Free" ? "text-green-500" : "text-red-500"
              }`}
            >
              {pricing}
            </span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link to={`serviceDetails/${id}`}>
            <button className="btn btn-primary w-full">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
