import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import { MdOutlineMail } from "react-icons/md";
import moment from "moment";
import { FaRegTrashCan } from "react-icons/fa6";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFetchTestimonials = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/testimonial");
      if (response.data) {
        setTestimonials(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching", { theme: "dark" });
      console.log(error, "error at testimonials");
    }
  };

  useEffect(() => {
    handleFetchTestimonials();
  }, []);

  const handleUpdateStatus = async (id) => {
    try {
      let isVisible = true;
      let dataToSend = { isVisible };
      let result = await axios.put("/testimonial/" + id, dataToSend);
      if (result.data) {
        handleFetchTestimonials();
      }
    } catch (error) {
      toast.error("Failed To Approve", { theme: "dark" });
    }
  };

  const handleDelete = async (id) => {
    try {
      let confirm = window.confirm("Are you Sure ?");
      if (confirm) {
        let result = await axios.delete("/testimonial/" + id);
        if (result.data) {
          handleFetchTestimonials();
        }
      }
    } catch (error) {
      toast.error("Failed To Delete", { theme: "dark" });
    }
  };

  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[10px] sm:mt-[2em]">
      {/* topbar */}
      <div className="flex justify-between items-center">
        <Link to="/admin">
          <FaArrowLeft className="text-2xl" />
        </Link>
      </div>
      <div>
        {loading ? (
          <div className="h-[70vh] w-full flex justify-center">
            <Spinner message="Loading Testimonials ..." />
          </div>
        ) : (
          <div className="mt-8">
            {testimonials?.length > 0 ? (
              <div className=" sm:grid grid-cols-1 md:grid-cols-2  gap-3">
                {testimonials.map((item) => (
                  <div
                    key={item._id}
                    className="bg-zinc-200 p-3 rounded-lg mb-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="mb-4">
                        <img
                          src={item.profile}
                          alt=""
                          className="h-[50px] w-[50px] rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{item.fullName}</p>
                      </div>
                    </div>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-inherit hover:text-blue-600 flex gap-2 items-center"
                    >
                      <p>
                        <MdOutlineMail className="text-2xl" />
                      </p>
                      <p>{item.email}</p>
                    </a>
                    <p>{item.message}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-zinc-400 text-sm">
                          {moment(item.createdAt).fromNow()}
                        </p>
                      </div>

                      <div className="flex items-center gap-5">
                        <div>
                          {!item.isVisible ? (
                            <>
                              <button
                                className="blueBg p-2 rounded-md text-white"
                                onClick={() => handleUpdateStatus(item._id)}
                              >
                                Approve ?
                              </button>
                            </>
                          ) : (
                            <>
                              <p className="blueTxt font-semibold">Approved</p>
                            </>
                          )}
                        </div>
                        <div>
                          <FaRegTrashCan
                            className="text-xl text-red-500 cursor-pointer"
                            onClick={() => handleDelete(item?._id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[70vh] w-full flex justify-center items-center">
                <p className="font-semibold">😢 No Inquiries Yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
