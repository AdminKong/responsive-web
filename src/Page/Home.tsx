import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manage from "../components/Manage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Manage/>
    </div>
  );
};

export default Home;
