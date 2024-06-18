import React, { useEffect, useState } from "react";

import Spinner from "./Spinner";
import axios from "../axios";
import Learn10 from "../assets/l10.gif";

const Vision = () => {
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

  return (
    <div className="">
      {loading ? (
        <div className="mt-9">
          <Spinner message="Fetching ..." />
        </div>
      ) : (
        <>
          {vision.length > 0 && mission.length > 0 && (
            <>
              <div className="flex flex-col md:flex-row items-center gap-4 px-[10px] md:px-[2em]  xl:px-[5em] py-[20px] mt-[3em] textStyle">
                {}

                {/* txt side */}
                <div className="flex-[0.5] lg:flex-[0.6]">
                  <div className="flex justify-center mb-4 ">
                    <img src={Learn10} alt="" className="w-[140px]" />
                  </div>
                  {/* vission */}
                  <div className="mb-12">
                    <p className="font-semibold text-4xl text-center">
                      Our Vision
                    </p>
                    {vision?.map((item) => (
                      <p className="text-center" key={item._id}>
                        {item.vision}
                      </p>
                    ))}
                  </div>
                  {/* mission */}
                  <div>
                    <p className="font-semibold text-4xl text-center">
                      Our Mission
                    </p>
                    <div
                      style={{ lineHeight: "1em" }}
                      className="my-3 text-center"
                    ></div>
                    {mission?.map((item) => (
                      <p className="text-center" key={item._id}>
                        {item.mission}
                      </p>
                    ))}
                  </div>
                </div>

                <div className=" flex-[0.5] lg:flex-[0.4]">
                  <img
                    src="https://img.freepik.com/free-photo/medium-shot-latin-man-holding-tablet_23-2151139495.jpg?t=st=1717566128~exp=1717569728~hmac=ceb1ecb940983a947793ea6e3dace31c99d6b627a9a8c87767b6f5d1d6f5976f&w=1380"
                    alt=""
                    loading="lazy"
                    className="rounded-2xl imageHolder"
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Vision;
