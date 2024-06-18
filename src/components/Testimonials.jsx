import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import CreateTestimonial from "../utils/CreateTestimonial";
import Spinner from "./Spinner";
import axios from "../axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      let result = await axios.get("/testimonial/valid");
      if (result) {
        setTestimonials(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - itemsToShow) {
      setCurrentIndex(currentIndex + itemsToShow);
    } else {
      setCurrentIndex(testimonials.length - itemsToShow);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  // working on creation modal
  const [isPopUpCreateOpen, setIsPopUpCreateOpen] = useState(false);
  const handleTestimonialCreate = () => {
    document.body.style.overflow = "hidden";
    setIsPopUpCreateOpen(true);
  };

  return (
    <>
      {loading ? (
        <div>
          <Spinner message="Loading..." />
        </div>
      ) : (
        <>
          {testimonials.length > 0 && (
            <>
              <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[60px] pb-[20px]">
                <h2
                  className="font-bold text-2xl text-center mb-4"
                  style={{ lineHeight: "1.3em" }}
                >
                  Testimonials
                </h2>
                <p
                  className="font-semibold text-center"
                  style={{ lineHeight: "1.3em" }}
                >
                  What People Have To Say About Us
                </p>

                <p
                  className="text-center underline cursor-pointer"
                  onClick={() => handleTestimonialCreate()}
                >
                  👋 Want To Leave One ?
                </p>

                {/* wrapper */}
                <div className="mt-[40px] flex flex-col gap-[20px] items-center">
                  <div className="flex flex-wrap justify-center gap-[20px]">
                    {displayedTestimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-[45%] md:w-[30%] m-auto"
                      >
                        <div className="w-full flex justify-center">
                          <img
                            src={testimonial.profile}
                            alt="Profile"
                            className="w-[80px] h-[80px] object-cover rounded-full"
                          />
                        </div>
                        <h2 className="text-center my-[10px]">
                          {testimonial.fullName}
                        </h2>
                        <p className="text-center">{testimonial.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-[20px] justify-center mt-[20px]">
                    <button
                      onClick={handlePreviousClick}
                      disabled={currentIndex === 0}
                      className={`blueBg text-white rounded-full p-2 ${
                        currentIndex === 0
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <HiOutlineArrowSmallLeft />
                    </button>
                    <button
                      onClick={handleNextClick}
                      disabled={
                        currentIndex >= testimonials.length - itemsToShow
                      }
                      className={`blueBg text-white rounded-full p-2 ${
                        currentIndex >= testimonials.length - itemsToShow
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <HiOutlineArrowSmallRight />
                    </button>
                  </div>
                </div>
                {/*  */}
              </div>
            </>
          )}
        </>
      )}

      {/* vcccccccccccccccccccccccc */}

      {/* create options */}
      <div>
        {isPopUpCreateOpen && (
          <div className="">
            {/* overlay div */}
            <div
              className="fixed z-[999] top-0 bottom-0 w-full left-0 right-0 bg-[rgba(0,0,0,0.6)]"
              onClick={() => {
                setIsPopUpCreateOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <div className="  mt-5 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                <div
                  className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <CreateTestimonial
                    onClose={() => {
                      setIsPopUpCreateOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonials;
