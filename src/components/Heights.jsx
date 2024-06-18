import React from "react";
import { Link } from "react-router-dom";

const Heights = () => {
  return (
    <div className="blueBg mt-[3em] textStyle ">
      <div className=" px-[10px] md:px-[2em]  xl:px-[5em]   py-[60px] flex flex-col md:flex-row gap-3 items-center">
        <div className="flex-[0.4] w-full text-white ">
          <p
            className="font-semibold text-4xl "
            style={{ lineHeight: "1.3em" }}
          >
            TAKE YOUR LEARNING TO
          </p>
          <p className="font-semibold text-4xl" style={{ lineHeight: "1.3em" }}>
            NEW HEIGHTS WITH US
          </p>
          <div className=" w-full flex justify-center my-[2em]  md:justify-start  ">
            {/* <a
              href="#contactPage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="special-w-bg">Get Started</span>
            </a> */}
            <Link
              to="https://kepsa-dseap.azurefd.net/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="special-w-bg">Get Started</span>
            </Link>
          </div>
        </div>
        <div className="flex-[0.6]">
          <p className="text-white ">
            {" "}
            Ready to elevate your learning experience? Join us and soar to new
            heights! Unleash your potential with our innovative approach.
            Discover limitless possibilities as you journey with us. Take your
            learning to unprecedented levels of success. Together, let's reach
            for the stars! 🚀 #LearningElevated
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heights;
