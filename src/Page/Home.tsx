// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manage from "../components/Manage";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Manage/>
      <Newsletter/>
    </div>
  );
};

export default Home;
