import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Values from "../components/Values";
import Contact from "../components/Contact";
import Tracks from "../components/Tracks";
import Offer from "../components/Offer";
import TopStrip from "../components/TopStrip";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* arrow to scroll to top */}
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-[#0067b8] text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
      <Navbar />
      <div className="hidden md:block">
        <TopStrip />
      </div>
      <Upper />

      <div id="tracks">
        <Tracks />
      </div>
      <Offer />
      <Values />

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
