import React from "react";

const ResourceRecommendations = () => {
  const resources = [
    {
      title: "Top 10 Skills Employers Look For in 2024",
      description: "Explore the top skills that will help you land your dream job this year.",
      link: "https://example.com/skills-2024",
    },
    {
      title: "How to Write a Killer Resume",
      description: "Learn the secrets to crafting a resume that will catch the attention of recruiters.",
      link: "https://example.com/write-resume",
    },
    {
      title: "LinkedIn Tips for Job Seekers",
      description: "Improve your LinkedIn profile and network to increase your job opportunities.",
      link: "https://example.com/linkedin-tips",
    },
    {
      title: "Time Management for Success",
      description: "Master the art of time management to enhance productivity and achieve your goals.",
      link: "https://example.com/time-management",
    },
    {
      title: "Networking Strategies That Work",
      description: "Build meaningful connections to advance your career.",
      link: "https://example.com/networking-strategies",
    },
    {
      title: "Interview Tips for Freshers",
      description: "Ace your interviews with these tried-and-tested tips for beginners.",
      link: "https://example.com/interview-tips",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Recommended Resources</h2>
      <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600">{resource.title}</h3>
            <p className="text-gray-700 mt-2">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceRecommendations;
