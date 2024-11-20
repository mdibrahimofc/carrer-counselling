// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  const slides = [
    {
      title: "Resume Reviews Matter",
      statistic: "90% of job seekers who received professional resume reviews found jobs within 3 months.",
      image: "https://i.ibb.co.com/1n9mngy/pexels-sora-shimazaki-5673502.jpg"
    },
    {
      title: "Mock Interviews Boost Confidence",
      statistic: "70% of candidates perform better in interviews after practicing with mock sessions.",
      image: "https://i.ibb.co.com/pdGw7sr/pexels-tima-miroshnichenko-5439379.jpg"
    },
    {
      title: "Networking Opens Doors",
      statistic: "80% of successful career transitions happen through effective networking.",
      image: "https://i.ibb.co.com/PTCVy06/pexels-fauxels-3184422.jpg"
    }
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3000, // Time in ms before the slide changes
        disableOnInteraction: false, // Keeps autoplay running after user interaction
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="text-center p-4">
            <h3 className="text-lg font-bold">{slide.title}</h3>
            <p className="text-gray-600">{slide.statistic}</p>
            <img src={slide.image} alt={slide.title} className="w-11/12 h-1/2 mx-auto rounded-md mt-4" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};