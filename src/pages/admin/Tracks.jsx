import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { LuPen } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import moment from "moment";
import CreateTrack from "../../utils/CreateTrack";
import UpdateTrack from "../../utils/UpdateTrack";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFetchTracks = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/tracks");
      if (response.data) {
        setTracks(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Fetching", { theme: "dark" });
      console.log(error, "error at tracks");
    }
  };

  useEffect(() => {
    handleFetchTracks();
  }, []);

  // working on creation modal
  const [isPopUpCreateOpen, setIsPopUpCreateOpen] = useState(false);
  const handleTrackCreate = () => {
    document.body.style.overflow = "hidden";
    setIsPopUpCreateOpen(true);
  };

  // working on edit modal
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isPopUpEditOpen, setIsPopUpEditOpen] = useState(false);
  const handleTrackUpdate = (track) => {
    setSelectedTrack(track);
    document.body.style.overflow = "hidden";
    setIsPopUpEditOpen(true);
  };

  const handleDeleteTrack = async (trackId) => {
    try {
      let confirm = window.confirm("Delete This Track ?");
      if (confirm) {
        let result = await axios.delete("/tracks/" + trackId);
        if (result.data) {
          handleFetchTracks();
        }
      }
    } catch (error) {
      toast.error("Failed To Delete Track", { theme: "dark" });
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
              onClick={() => handleTrackCreate()}
            />
          </button>
        </div>
      </div>
      {/* data */}
      <div className="mt-[2em]">
        {loading ? (
          <div className="h-[70vh] w-full flex justify-center">
            <Spinner message="Loading Tracks ..." />
          </div>
        ) : (
          <>
            <h4 className="mb-5">Current Live Tracks</h4>
            <div>
              {tracks?.length > 0 ? (
                <div className=" sm:grid grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-5 gap-3">
                  {tracks.map((item) => (
                    <div key={item._id} className="mb-14 sm:mb-0">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="rounded-lg w-full sm:max-h-[500px]"
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
                            onClick={() => handleTrackUpdate(item)}
                          />
                          <FaRegTrashCan
                            className="text-xl text-red-500 cursor-pointer"
                            onClick={() => handleDeleteTrack(item?._id)}
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
              <div className=" mt-2 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                <div
                  className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <CreateTrack
                    onClose={() => {
                      setIsPopUpCreateOpen(false);
                      document.body.style.overflow = "auto";
                      handleFetchTracks();
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
              <div className=" mt-2 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                <div
                  className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <UpdateTrack
                    post={selectedTrack}
                    onClose={() => {
                      setIsPopUpEditOpen(false);
                      document.body.style.overflow = "auto";
                      handleFetchTracks();
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

export default Tracks;
