import React from "react";

const inspirations = [
  {
    id: 1,
    quote:
      "The only way to do great work is to love what you do. – Steve Jobs",
    image: "https://i.ibb.co.com/L6Nx99k/Steve-Jobs-Headshot-2010-CROP-cropped-2.jpg",
    name: "Steve Jobs",
    profession: "Co-founder, Apple Inc.",
  },
  {
    id: 2,
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    image: "https://i.ibb.co.com/zbSnthX/Bundesarchiv-Bild-183-D0116-0041-019-Albert-Schweitzer.jpg",
    name: "Albert Schweitzer",
    profession: "Philosopher & Physician",
  },
  {
    id: 3,
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    image: "https://i.ibb.co.com/L6Nx99k/Steve-Jobs-Headshot-2010-CROP-cropped-2.jpg",
    name: "Steve Jobs",
    profession: "Innovator",
  },
];

const InspirationSection = () => {
  return (
    <section className="bg-blue-50 py-10 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          Inspiration for Your Journey
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Stay motivated with words of wisdom from successful individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {inspirations.map((inspiration) => (
          <div
            key={inspiration.id}
            className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={inspiration.image}
              alt={inspiration.name}
              className="w-24 h-24 mx-auto rounded-full border-2 border-blue-600"
            />
            <blockquote className="mt-5 italic text-gray-700">
              "{inspiration.quote}"
            </blockquote>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-blue-700">
                {inspiration.name}
              </h4>
              <p className="text-gray-600">{inspiration.profession}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;
