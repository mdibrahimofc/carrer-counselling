import React from 'react';

const CareerResources = () => {
  // Example resource data
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
      title: "Ace Your Interview: 5 Tips",
      description: "Prepare for your job interview with these top tips to make a lasting impression.",
      link: "https://example.com/interview-tips",
    },
    {
      title: "How to Choose the Right Career Path",
      description: "Discover methods for finding the career that aligns with your passions and strengths.",
      link: "https://example.com/choose-career-path",
    },
    {
      title: "Building a Personal Brand Online",
      description: "Learn how to build an authentic personal brand that resonates with employers.",
      link: "https://example.com/build-personal-brand",
    },
  ];
  

  return (
    <section className="career-resources bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
        <p className="text-lg mb-6">Explore articles and resources to help you with your career journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <button href={resource.link} className="text-blue-500 btn hover:underline" rel="noopener noreferrer">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerResources;
