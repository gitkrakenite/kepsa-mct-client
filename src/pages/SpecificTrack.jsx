import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "../axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineArrowUp } from "react-icons/ai";

const SpecificTrack = () => {
  const { id } = useParams();
  const [singleTrack, setSingleTrack] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrack = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/tracks/" + id);
      if (response) {
        setLoading(false);
        setSingleTrack([response.data.response]);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching Track.", { theme: "dark" });
      toast.error("Network error", { theme: "dark" });
    }
  };

  useEffect(() => {
    fetchTrack();
  }, []);

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
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer blueBg text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}

      {loading ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <Spinner message="Loading..." />
        </div>
      ) : (
        <>
          {/* wrapper */}
          <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[10px] md:mt-[50px] pb-[20px]">
            {/* content */}
            <div>
              {singleTrack?.map((item) => (
                <div key={item._id}>
                  <div className="mt-[20px] flex flex-col sm:flex-row justify-between">
                    <h2>{item.title}</h2>
                  </div>

                  <div className=" pt-[2em] sm:pt-[4em] w-[100%]  sm:w-[80%] m-auto">
                    <div className="flex justify-center mb-5">
                      <img
                        src={item.photo}
                        alt=""
                        loading="lazy"
                        className="max-h-[500px] object-contain rounded-md"
                      />
                    </div>

                    <p className="mt-[10px]">{item.description}</p>

                    <div>
                      <a
                        href="https://kepsa-dseap.azurefd.net/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Access This And More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SpecificTrack;
