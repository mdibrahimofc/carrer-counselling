import React from "react";

const CareerResources = () => {
  // Example resource data with images
  const resources = [
    {
      title: "Top 10 Skills Employers Look For in 2024",
      description:
        "Explore the top skills that will help you land your dream job this year.",
      link: "https://example.com/skills-2024",
      image: "https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.jpg?s=1024x1024&w=is&k=20&c=lMLbXlQAYI-fMEfNSA_qJgiM3KjrXE1H3Lmh2lY8Ivo=", 
    },
    {
      title: "How to Write a Killer Resume",
      description:
        "Learn the secrets to crafting a resume that will catch the attention of recruiters.",
      link: "https://example.com/write-resume",
      image: "https://www.shutterstock.com/shutterstock/photos/2149940849/display_1500/stock-vector-concept-of-writing-best-resume-job-search-employees-hiring-search-for-job-candidates-employee-2149940849.jpg",
    },
    {
      title: "LinkedIn Tips for Job Seekers",
      description:
        "Improve your LinkedIn profile and network to increase your job opportunities.",
      link: "https://example.com/linkedin-tips",
      image: "https://images.unsplash.com/photo-1592181572975-1d0d8880d175?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    },
    {
      title: "Ace Your Interview: 5 Tips",
      description:
        "Prepare for your job interview with these top tips to make a lasting impression.",
      link: "https://example.com/interview-tips",
      image: "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?t=st=1732167334~exp=1732170934~hmac=2e793b80f1770279828e6b73a070c581a1923ab9b43caf52a418a1bfca25db0d&w=1380", 
    },
    {
      title: "How to Choose the Right Career Path",
      description:
        "Discover methods for finding the career that aligns with your passions and strengths.",
      link: "https://example.com/choose-career-path",
      image: "https://img.freepik.com/premium-vector/career-path-through-education-business-journey_1316704-25717.jpg?w=1380", 
    },
    {
      title: "Building a Personal Brand Online",
      description:
        "Learn how to build an authentic personal brand that resonates with employers.",
      link: "https://example.com/build-personal-brand",
      image: "https://www.apmortgage.com/hs-fs/hubfs/personal%20branding%20is%20new%20trust%20accelerator.png?width=600&name=personal%20branding%20is%20new%20trust%20accelerator.png", 
    },
  ];

  return (
    <section className="career-resources bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
        <p className="text-lg mb-6">
          Explore articles and resources to help you with your career journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="resource-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {resource.description}
              </p>
              <button
                href={resource.link}
                className="text-blue-500 btn hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
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
