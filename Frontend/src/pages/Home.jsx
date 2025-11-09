import React from "react";
import Navbar from "../components/Home/Navbar"
import Hero from "../components/Home/Hero";
import Motive from "../components/Home/Motive";
import Partners from "../components/Home/Partners";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
// import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Motive />
      <Partners />
      <Services />
      <Stats />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
