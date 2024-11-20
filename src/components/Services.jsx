import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard"

const Services = () => {
    const AllData = useLoaderData()
    const services = AllData.services;
  return (
    <div className="my-6">
      <div className="text-center mx-auto mb-4">
        <h2 className="font-semibold md:text-2xl mb-2">Our services</h2>
        <p className="md:text-4xl text-3xl font-bold">
          Empower Your Career Journey <br /> for Greater Success
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
