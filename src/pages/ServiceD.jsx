import React from "react";

const ServiceCard = ({ data }) => {
  const {
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
  } = data;
};

export default function App() {
  const serviceData = {
    id: 5,
    image: "https://c8.alamy.com/comp/T1D1AR/successful-counselor-T1D1AR.jpg",
    serviceName: "Skill Assessment Tests",
    category: "Online",
    description: "Assess your skills and find suitable career paths.",
    pricing: "$25 per person",
    duration: "15-12-24 1:00 PM - 2:30 PM",
    counselor: "Mr. Kevin Black",
    rating: 4.8,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ServiceCard data={serviceData} />
    </div>
  );
}
