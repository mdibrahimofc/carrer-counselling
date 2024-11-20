import React from 'react';

const SuccessStories = () => {
  // Example success stories data
  const stories = [
    {
      name: "John Doe",
      story: "Thanks to the career counseling sessions, I found my dream job as a software engineer. The personalized advice helped me focus on the right skills.",
      image: "https://placeimg.com/100/100/people/1",
    },
    {
      name: "Jane Smith",
      story: "The resume review service was amazing! My resume now stands out, and I've been getting more interview calls.",
      image: "https://placeimg.com/100/100/people/2",
    },
    {
      name: "Sam Wilson",
      story: "The counseling session helped me gain clarity on my career path. Now, I’m working in a field I’m passionate about.",
      image: "https://placeimg.com/100/100/people/3",
    },
    {
      name: "Emily Johnson",
      story: "The career coaching sessions were exactly what I needed. They helped me discover new career opportunities and taught me how to network effectively.",
      image: "https://placeimg.com/100/100/people/4",
    },
    {
      name: "Michael Brown",
      story: "I was unsure about my career choices, but after a few counseling sessions, I’ve decided to pursue a career in marketing. It’s been an eye-opening experience.",
      image: "https://placeimg.com/100/100/people/5",
    },
    {
      name: "Sophia Lee",
      story: "The resume and LinkedIn profile review helped me land my first job after graduation. I’m so grateful for the guidance I received!",
      image: "https://placeimg.com/100/100/people/6",
    },
  ];
  

  return (
    <section className="success-stories bg-blue-50 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-lg mb-6">Hear from people who have achieved their career goals with our help.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="story-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{story.name}</h3>
              <p className="text-sm text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
