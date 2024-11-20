import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Carrer Goals</title>
      </Helmet>
      <Slider />
      <Services />
    </div>
  );
};

export default Home;
