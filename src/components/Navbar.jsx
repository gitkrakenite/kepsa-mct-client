import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { motion } from "framer-motion";
// import Logo from "../assets/mc.png";
import Logo from "../assets/kyeep.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const navigate = useNavigate();

  const Navlinks = [
    { id: 1, title: "Home", goTo: "/" },
    { id: 2, title: "About Us", goTo: "about" },
    { id: 3, title: "Tracks", goTo: "tracks" },
    { id: 4, title: "Testimonials", goTo: "testimonials" },

    {
      id: 5,
      title: "Platform Access",
      goTo: "https://kepsa-dseap.azurefd.net/",
    },
    { id: 6, title: "Contact", goTo: "contact" },
    // { id: 5, title: "Blog", goTo: "/blog" },
    // { id: 5, title: "Get Stat", goTo: "/contact-us" },
  ];

  const handleClick = (item) => {
    setActive(item.title);
    if (item.goTo === "/" || item.title === "Home") {
      window.scrollTo(0, 0);
    } else if (item.goTo === "tracks") {
      document.getElementById("tracks").scrollIntoView({ behavior: "smooth" });
    } else if (item.goTo === "about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (item.goTo === "testimonials") {
      document
        .getElementById("testimonials")
        .scrollIntoView({ behavior: "smooth" });
    } else if (item.goTo === "contact") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else if (item.goTo.startsWith("http")) {
      window.location.href = item.goTo;
    } else {
      navigate(item.goTo);
    }
  };

  return (
    <div>
      {/* desktop navbar */}
      <div
        className=" hidden xl:block py-[20px] top-0 left-0 fixed w-full px-[2em]  xl:px-[5em] "
        style={{
          background: "rgba(247, 240, 240, 0.9)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
        }}
      >
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} loading="lazy" alt="" className="h-14 w-14" />
            </Link>
          </div>
          <div>
            <ul className="flex gap-[40px]">
              {Navlinks.map((item) => (
                <li
                  key={item.id}
                  className={` 
                  hover:text-[#0067b8] text-inherit no-underline cursor-pointer`}
                >
                  <span
                    onClick={() => handleClick(item)}
                    className={`${
                      item.title === active ? "text-[#0067b8]" : "text-inherit"
                    }`}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {!toggle && (
        <div
          className="xl:hidden h-[8vh] top-0 left-0 flex justify-between items-center w-full fixed px-[1em] py-[1em]"
          style={{
            background: "rgba(247, 240, 240, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div>
            <Link to="/">
              <img src={Logo} loading="lazy" alt="" className="h-10 w-10" />
            </Link>
          </div>
          <div>
            <AiOutlineMenu
              className="text-3xl cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      )}

      {toggle && (
        <div
          className="xl:hidden h-[100vh] top-0 left-0  w-full fixed px-[1em] "
          style={{
            background: "rgba(247, 240, 240, 0.9)",
            backdropFilter: "blur(3px)",
            zIndex: 2,
          }}
        >
          <div className="flex justify-between items-center pt-[10px]">
            <div>
              <Link to="/">
                <img src={Logo} loading="lazy" alt="" className="h-10 w-10" />
              </Link>
            </div>
            <div>
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          {/* links */}
          <div className="pt-[1em]">
            <ul className="flex flex-col my-[1em] gap-[20px] text-end">
              {Navlinks?.map((item) => (
                <li
                  key={item.id}
                  className={`hover:text-[#0067b8] text-inherit no-underline cursor-pointer`}
                  style={{ borderBottom: "1px solid #535353" }}
                  onClick={() => {
                    handleClick(item);
                    setToggle(false);
                  }}
                >
                  <span
                    className={`${
                      item.title === active ? "text-[#0067b8]" : "text-inherit"
                    }`}
                  >
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Navbar;
