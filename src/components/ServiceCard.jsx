import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { image, id, pricing, serviceName, category, counselor } = service;
  return (
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={counselor}
            className="w-[300px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {counselor}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{serviceName}</p>
          <p>{pricing}</p>
          <div className="card-actions justify-end">
            <Link to={`serviceDetails/${id}`}><div className="badge badge-outline hover:cursor-pointer">Learn More</div></Link>
          </div>
        </div>
      </div>
  );
};

export default ServiceCard;
