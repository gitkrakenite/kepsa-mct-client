import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import moment from "moment";
import { MdOutlineMail } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

const Inquiries = () => {
  const [inQuiries, setInQuiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFetchInQueries = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/inquire");
      if (response.data) {
        setInQuiries(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching", { theme: "dark" });
      console.log(error, "error at inquire");
    }
  };

  useEffect(() => {
    handleFetchInQueries();
  }, []);

  const handleUpdateStatus = async (id) => {
    try {
      let inqStatus = "approved";
      let dataToSend = { inqStatus };
      let result = await axios.put("/inquire/" + id, dataToSend);
      if (result.data) {
        handleFetchInQueries();
      }
    } catch (error) {
      toast.error("Failed To Approve", { theme: "dark" });
    }
  };

  const handleDeleteQuery = async (id) => {
    try {
      let confirm = window.confirm("Are you Sure ?");
      if (confirm) {
        let result = await axios.delete("/inquire/" + id);
        if (result.data) {
          handleFetchInQueries();
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
            <Spinner message="Loading Inquiries ..." />
          </div>
        ) : (
          <div className="mt-8">
            {inQuiries?.length > 0 ? (
              <div className=" sm:grid grid-cols-2  gap-3">
                {inQuiries.map((item) => (
                  <div
                    key={item._id}
                    className="bg-zinc-200 p-3 rounded-lg mb-4"
                  >
                    <p className="font-semibold">{item.fullName}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-inherit hover:text-blue-600 flex gap-2 items-center"
                    >
                      <p>
                        <MdOutlineMail className="text-2xl" />
                      </p>
                      <p>{item.email}</p>
                    </a>
                    <p>{item.inquiry}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-zinc-400 text-sm">
                          {moment(item.createdAt).fromNow()}
                        </p>
                      </div>

                      <div className="flex items-center gap-5">
                        <div>
                          {item.inqStatus === "pending" ? (
                            <>
                              <button
                                className="blueBg p-2 rounded-md text-white"
                                onClick={() => handleUpdateStatus(item._id)}
                              >
                                Handled ?
                              </button>
                            </>
                          ) : (
                            <>
                              <p className="blueTxt font-semibold">Handled</p>
                            </>
                          )}
                        </div>
                        <div>
                          <FaRegTrashCan
                            className="text-xl text-red-500 cursor-pointer"
                            onClick={() => handleDeleteQuery(item?._id)}
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

export default Inquiries;
