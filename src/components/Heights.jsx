import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Heights = () => {
  return (
    <div className="blueBg mt-[1em] textStyle ">
      <div className=" px-[10px] md:px-[2em]  xl:px-[5em]   py-[60px] flex flex-col lg:flex-row gap-3 items-center">
        <div className="flex-[0.4] w-full text-white ">
          <p
            className="font-semibold text-3xl sm:text-4xl text-start "
            style={{ lineHeight: "1.3em" }}
          >
            TAKE YOUR LEARNING TO
          </p>
          <p
            className="font-semibold text-4xl text-start"
            style={{ lineHeight: "1.3em" }}
          >
            NEW HEIGHTS WITH US
          </p>
          <div className=" flex justify-center md:justify-start my-[3em] sm:my-[2em]   ">
            <Link
              to="https://kepsa-dseap.azurefd.net/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="special-w-bg">Start Learning</span>
            </Link>
          </div>
        </div>
        <div className="flex-[0.6]">
          <p className="text-white text-start">
            {" "}
            Ready to elevate your learning experience? Join us and soar to new
            heights! Unleash your potential with our innovative approach.
            Discover limitless possibilities as you journey with us. Take your
            learning to unprecedented levels of success. Together, let's reach
            for the stars! 🚀 #LearningElevated
          </p>
          {/* <p className="text-white">
            Born from an exciting collaboration between Microsoft and KEPSA, the
            Digital Skills and Employment Advancement Program (DSEAP) is here to
            empower you with top-notch digital skills designed for the future.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-2  mt-4 sm:gap-5 ">
            <ul className="text-white">
              <li>
                <a
                  className="flex gap-3 items-center text-inherit"
                  href="https://kepsa-dseap.azurefd.net/"
                >
                  <p>
                    <FaAngleRight className=" text-xl" />
                  </p>
                  <p className="text-white"> Artificial Intelligence</p>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center text-inherit"
                  href="https://kepsa-dseap.azurefd.net/"
                >
                  <p>
                    <FaAngleRight className=" text-xl" />
                  </p>
                  <p> Cyber Security</p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  className="flex gap-3 items-center text-inherit"
                  href="https://kepsa-dseap.azurefd.net/"
                >
                  <p>
                    <FaAngleRight className="text-white text-xl" />
                  </p>
                  <p className="text-white">Cloud Computing</p>
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center text-white"
                  href="https://kepsa-dseap.azurefd.net/"
                >
                  <p>
                    <FaAngleRight className="text-white text-xl" />
                  </p>
                  <p>Sustainability</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heights;
