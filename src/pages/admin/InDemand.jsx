import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import CreateCourse from "../../utils/CreateCourse";
import { LuPen } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import moment from "moment";
import UpdateCourse from "../../utils/UpdateCourse";

const InDemand = () => {
  const [inDemand, setInDemand] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFetchInDemand = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/indemand");
      if (response.data) {
        setInDemand(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching", { theme: "dark" });
      console.log(error, "error at indemand");
    }
  };

  useEffect(() => {
    handleFetchInDemand();
  }, []);

  // working on creation modal
  const [isPopUpCreateOpen, setIsPopUpCreateOpen] = useState(false);
  const handleCourseCreate = () => {
    document.body.style.overflow = "hidden";
    setIsPopUpCreateOpen(true);
  };

  // working on edit modal
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isPopUpEditOpen, setIsPopUpEditOpen] = useState(false);
  const handleCourseUpdate = (course) => {
    setSelectedCourse(course);
    document.body.style.overflow = "hidden";
    setIsPopUpEditOpen(true);
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      let confirm = window.confirm("Delete This Course ?");
      if (confirm) {
        let result = await axios.delete("/indemand/" + courseId);
        if (result.data) {
          handleFetchInDemand();
        }
      }
    } catch (error) {
      toast.error("Failed To Delete Course", { theme: "dark" });
    }
  };

  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[10px] sm:mt-[2em]">
      {/* topbar */}
      <div className="flex justify-between items-center">
        <Link to="/admin">
          <FaArrowLeft className="text-2xl" />
        </Link>
        <div>
          <button>
            <IoMdAdd
              className="blueBg p-2 text-5xl text-white rounded-lg"
              onClick={() => handleCourseCreate()}
            />
          </button>
        </div>
      </div>
      {/* data */}
      <div className="mt-[2em]">
        {loading ? (
          <div className="h-[70vh] w-full flex justify-center">
            <Spinner message="Loading Courses ..." />
          </div>
        ) : (
          <>
            <h4 className="mb-5">In Demand Courses on Offer</h4>
            <div>
              {inDemand?.length > 0 ? (
                <div className=" sm:grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 gap-3">
                  {inDemand.map((item) => (
                    <div key={item._id} className="mb-14 sm:mb-0">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="rounded-lg"
                      />
                      <p className="my-3 font-semibold md:text-lg">
                        {item.title}
                      </p>
                      <p className="text-sm ">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p> {moment(item.createdAt).fromNow()}</p>
                        </div>

                        <div className="flex gap-3 justify-end">
                          <LuPen
                            className="text-xl blueTxt cursor-pointer"
                            onClick={() => handleCourseUpdate(item)}
                          />
                          <FaRegTrashCan
                            className="text-xl text-red-500 cursor-pointer"
                            onClick={() => handleDeleteCourse(item?._id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[70vh] w-full flex justify-center items-center">
                  <p className="font-semibold">😢 Not Added Any</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
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
              <div className=" mt-1 sm:mt-5 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                <div
                  className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <CreateCourse
                    onClose={() => {
                      setIsPopUpCreateOpen(false);
                      document.body.style.overflow = "auto";
                      handleFetchInDemand();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* edit options */}
      <div>
        {isPopUpEditOpen && (
          <div className="">
            {/* overlay div */}
            <div
              className="fixed z-[999] top-0 bottom-0 w-full left-0 right-0 bg-[rgba(0,0,0,0.6)]"
              onClick={() => {
                setIsPopUpEditOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <div className="   mt-1 sm:mt-5  w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                <div
                  className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <UpdateCourse
                    post={selectedCourse}
                    onClose={() => {
                      setIsPopUpEditOpen(false);
                      document.body.style.overflow = "auto";
                      handleFetchInDemand();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InDemand;
