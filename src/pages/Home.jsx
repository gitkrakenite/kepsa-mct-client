import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Upper from "../components/Upper";
import Values from "../components/Values";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Tracks from "../components/Tracks";
import Heights from "../components/Heights";
import Vision from "../components/Vision";
import Offer from "../components/Offer";
import Subscription from "../components/Subscription";
import InDemand from "../components/InDemand";
import Footer from "../components/Footer";
import About from "../components/About";
import Partners from "../components/Partners";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Upper />
      {/* <Partners /> */}
      <Heights />
      <div id="about">
        <About />
      </div>
      {/* <Vision /> */}
      <Offer />
      <Values />
      <div id="tracks">
        <Tracks />
      </div>
      <Hero />

      <InDemand />

      <div id="testimonials">
        <Testimonials />
      </div>
      <Subscription />

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
