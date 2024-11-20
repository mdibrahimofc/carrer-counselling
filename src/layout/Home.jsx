import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import { Helmet } from "react-helmet";
import CareerResources from "../components/CareerResources";
import SuccessStories from "../components/SuccessStories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Carrer Goals</title>
      </Helmet>
      <Slider />
      <Services />
      <CareerResources/>
      <SuccessStories/>
    </div>
  );
};

export default Home;
