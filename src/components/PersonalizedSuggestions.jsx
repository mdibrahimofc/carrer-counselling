import React from "react";

const suggestions = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Analyze and interpret complex data to help organizations make better decisions.",
    skills: ["Python", "Machine Learning", "Statistics"],
    image: "https://i.ibb.co.com/B2WdwnP/18141.jpg",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description:
      "Design intuitive and engaging interfaces for websites and apps.",
    skills: ["Adobe XD", "Figma", "User Research"],
    image: "https://i.ibb.co.com/bL8hq7b/5757453.jpg",
  },
  {
    id: 3,
    title: "Digital Marketer",
    description:
      "Develop strategies to enhance online presence and drive business growth.",
    skills: ["SEO", "Google Ads", "Content Marketing"],
    image: "https://i.ibb.co.com/MCX2kHm/digital-marketing-with-icons-business-people.jpg",
  },
];

const PersonalizedSuggestions = () => {
  return (
    <section className="bg-gray-50 py-10 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Personalized Career Suggestions
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Discover careers tailored to your interests and skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={suggestion.image}
              alt={suggestion.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-600">
                {suggestion.title}
              </h3>
              <p className="text-gray-700 mt-2">{suggestion.description}</p>
              <h4 className="mt-4 font-semibold text-gray-800">Key Skills:</h4>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                {suggestion.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalizedSuggestions;
