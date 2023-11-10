// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manage from "../components/Manage";
import Newsletter from "../components/Newsletter";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Manage/>
      <Newsletter/>
      <Card/>
      <Footer/>
    </div>
  );
};

export default Home;
