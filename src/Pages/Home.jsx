import React from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Banner from "../component/Banner/Banner";
import TopFoods from "../component/TopFoods/TopFoods";
import AboutUs from "../component/AboutUs/AboutUs";
import CustomizeFood from "../component/CustomizeFood/CustomizeFood";
AOS.init();

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Moon Dining | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <CustomizeFood></CustomizeFood>
      <TopFoods></TopFoods>
      
    </div>
  );
};

export default Home;
