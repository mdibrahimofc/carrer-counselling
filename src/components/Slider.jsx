
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LeftTextRightImageSwiper() {
  const slides = [
    {
      title: "Resume Reviews Matter",
      statistic: "90% of job seekers who received professional resume reviews found jobs within 3 months.",
      extraInfo1: "Crafting a compelling resume can make you stand out.",
      extraInfo2: "Get your resume reviewed to unlock more opportunities.",
      image: "https://i.ibb.co/1n9mngy/pexels-sora-shimazaki-5673502.jpg",
    },
    {
      title: "Mock Interviews Boost Confidence",
      statistic: "70% of candidates perform better in interviews after practicing with mock sessions.",
      extraInfo1: "Confidence grows with practice and preparation.",
      extraInfo2: "Simulate real interviews to ace the actual ones.",
      image: "https://i.ibb.co/pdGw7sr/pexels-tima-miroshnichenko-5439379.jpg",
    },
    {
      title: "Networking Opens Doors",
      statistic: "80% of successful career transitions happen through effective networking.",
      extraInfo1: "Build connections to access hidden job opportunities.",
      extraInfo2: "Your network is your net worth—start growing it today.",
      image: "https://i.ibb.co/PTCVy06/pexels-fauxels-3184422.jpg",
    },
  ];

  return (
    <div className="w-full py-6 bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md gap-6">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                  {slide.title}
                </h3>
                <p className="mt-4 text-gray-600 text-lg">{slide.statistic}</p>
                <p className="mt-2 text-gray-500 italic">{slide.extraInfo1}</p>
                <p className="mt-1 text-gray-500 italic">{slide.extraInfo2}</p>
              </div>
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300")
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
