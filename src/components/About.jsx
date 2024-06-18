import React, { useEffect, useState } from "react";

import Photo from "../assets/l4.gif";
import { FaAngleRight } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

import Spinner from "./Spinner";
import axios from "../axios";
import Learn10 from "../assets/l10.gif";

const About = () => {
  const [loading, setLoading] = useState(false);

  const [vision, setVision] = useState([]);
  const fetchVision = async () => {
    try {
      let result = await axios.get("/vision");
      if (result) {
        setVision(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [mission, setMission] = useState([]);
  const fetchMission = async () => {
    try {
      let result = await axios.get("/mission");
      if (result) {
        setMission(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleFetchBoth = async () => {
    setLoading(true);
    fetchMission();
    fetchVision();
    setLoading(false);
  };

  useEffect(() => {
    handleFetchBoth();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold value as needed
    triggerOnce: true, // Stop observing after the first time the element comes into view
  });

  return (
    <div className=" mb-[1em]  sm:mb-[4em]  px-[10px] md:px-[2em] xl:px-[5em]  pb-[20px]">
      {/* description */}
      <div className="flex gap-5 flex-col-reverse md:flex-row items-center mb-[1em] mt-[4em] sm:mt-0">
        {/* text */}
        <div className="flex-1 lg:flex-[0.5] sm:mt-[120px]  relative">
          <h2 className="mb-4">Who Are We ?</h2>
          <p>
            Born from an exciting collaboration between Microsoft and KEPSA, the
            Digital Skills and Employment Advancement Program (DSEAP) is here to
            empower you with top-notch digital skills designed for the future.
          </p>

          {/* focus areas */}
          <div>
            <p className="font-semibold my-6">Primary Focus Areas</p>
            <div className="flex flex-col sm:flex-row gap-2  sm:gap-5">
              <ul>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://kepsa-dseap.azurefd.net/"
                  >
                    <p>
                      <FaAngleRight className="blueTxt text-xl" />
                    </p>
                    <p> Artificial Intelligence</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://kepsa-dseap.azurefd.net/"
                  >
                    <p>
                      <FaAngleRight className="blueTxt text-xl" />
                    </p>
                    <p> Cyber Security</p>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://kepsa-dseap.azurefd.net/"
                  >
                    <p>
                      <FaAngleRight className="blueTxt text-xl" />
                    </p>
                    <p>Cloud Computing</p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-3 items-center"
                    href="https://kepsa-dseap.azurefd.net/"
                  >
                    <p>
                      <FaAngleRight className="blueTxt text-xl" />
                    </p>
                    <p>Sustainability</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* vision and mission */}
          <div className="">
            {loading ? (
              <div className="mt-9">
                <Spinner message="Fetching ..." />
              </div>
            ) : (
              <>
                {vision.length > 0 && mission.length > 0 && (
                  <>
                    <div className="flex  w-full  textStyle">
                      {/* txt side */}
                      <div className=" w-full flex flex-col sm:flex-row gap-3 justify-between ">
                        {/* vission */}
                        <div className="mb-6">
                          <p className="font-semibold text-2xl text-start">
                            Our Vision
                          </p>
                          {vision?.map((item) => (
                            <p className="text-start" key={item._id}>
                              {item.vision}
                            </p>
                          ))}
                        </div>
                        {/* mission */}
                        <div>
                          <p className="font-semibold text-2xl text-start">
                            Our Mission
                          </p>
                          <div
                            style={{ lineHeight: "1em" }}
                            className="my-3 text-center"
                          ></div>
                          {mission?.map((item) => (
                            <p className="text-start" key={item._id}>
                              {item.mission}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          {/*  */}
        </div>
        {/* image side */}
        <div className=" hidden lg:block flex-[0.5]   relative">
          <div
            ref={ref}
            className={`triangle hidden md:flex absolute bottom-0 left-0 ${
              inView && "rotate-in-center"
            }`}
          />

          <div
            ref={ref}
            className={`"hidden md:flex absolute top-[-40px] right-0 bg-[#0067b8] h-[300px] w-[30px] rounded-bl-[80px] rounded-br-[30px] ${
              inView && "fade-in"
            }`}
          />

          <div className="h-[40px] w-[40px] bg-[#0067b8] rounded-full absolute bottom-0 right-0  " />

          <div className="w-full flex justify-center relative">
            <img src={Photo} loading="lazy" alt="" className=" max-h-[480px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
