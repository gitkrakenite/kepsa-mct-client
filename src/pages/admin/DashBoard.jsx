import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import Spinner from "../../components/Spinner";
import {
  MdOutlinePeopleAlt,
  MdOutlineQuestionMark,
  MdOutlineMail,
} from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { PiRoadHorizonDuotone } from "react-icons/pi";
import moment from "moment";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/admin/login");
    } else if (user.error) {
      navigate("/admin/login");
    }
  }, [user, navigate]);

  const getCurrentTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const [loading, setLoading] = useState(false);

  const [inDemand, setInDemand] = useState([]);
  const handleFetchInDemand = async () => {
    try {
      let response = await axios.get("/indemand");
      if (response.data) {
        setInDemand(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at indemand");
    }
  };

  const [inquiries, setInqueries] = useState([]);
  const handleFetchInQueries = async () => {
    try {
      let response = await axios.get("/inquire");
      if (response.data) {
        setInqueries(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at inqueries");
    }
  };

  const [subscribed, setSubscribed] = useState([]);
  const handleFetchSubscribed = async () => {
    try {
      let response = await axios.get("/subscribe");
      if (response.data) {
        setSubscribed(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at subscribed");
    }
  };

  const [testimonial, setTestimonial] = useState([]);
  const handleFetchTestimonial = async () => {
    try {
      let response = await axios.get("/testimonial");
      if (response.data) {
        setTestimonial(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at testimonial");
    }
  };

  const [tracks, setTracks] = useState([]);
  const handleFetchTracks = async () => {
    try {
      let response = await axios.get("/tracks");
      if (response.data) {
        setTracks(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at tracks");
    }
  };

  const [users, setUsers] = useState([]);
  const handleFetchUsers = async () => {
    try {
      let response = await axios.get("/users");
      if (response.data) {
        setUsers(response.data.response);
      }
    } catch (error) {
      console.log(error, "error at users");
    }
  };

  const [vision, setVision] = useState([]);
  const [currentVision, setCurrentVision] = useState([]);
  const fetchVision = async () => {
    try {
      let result = await axios.get("/vision");
      if (result) {
        setCurrentVision(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [mission, setMission] = useState("");
  const [currentMission, setCurrentMission] = useState([]);
  const fetchMission = async () => {
    try {
      let result = await axios.get("/mission");
      if (result) {
        setCurrentMission(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleFetchAllData = async () => {
    setLoading(true);
    await handleFetchInDemand();
    await handleFetchInQueries();
    await handleFetchSubscribed();
    await handleFetchTestimonial();
    await handleFetchTracks();
    await handleFetchUsers();
    await fetchMission();
    await fetchVision();
    setLoading(false);
  };

  useEffect(() => {
    handleFetchAllData();
  }, []);

  const [idToUpdate, setIdToUpdate] = useState("");

  // update mission statement
  useEffect(() => {
    if (currentMission && currentMission.length > 0) {
      setMission(currentMission[0].mission);
    }
  }, [currentMission]);

  const handleUpdateMission = async (e) => {
    e.preventDefault();
    try {
      if (!mission) return toast.error("Please Enter Mission");
      let dataToSend = { mission };

      let result = await axios.put("/mission/" + idToUpdate, dataToSend);
      if (result.data) {
        handleFetchAllData();
      }
    } catch (error) {
      toast.error("error updating mission", error);
    }
  };

  // update vision statement
  useEffect(() => {
    if (currentVision && currentVision.length > 0) {
      setVision(currentVision[0].vision);
    }
  }, [currentVision]);

  const handleUpdateVision = async (e) => {
    e.preventDefault();
    try {
      if (!vision) return toast.error("Please Enter vision");
      let dataToSend = { vision };

      let result = await axios.put("/vision/" + idToUpdate, dataToSend);
      if (result.data) {
        handleFetchAllData();
      }
    } catch (error) {
      toast.error("error updating vision", error);
    }
  };

  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[10px] sm:mt-[2em]">
      {/* wrapper */}
      <div>
        {/* topbar */}
        <div className="flex justify-between">
          <div className="" style={{ lineHeight: "0.4em" }}>
            <p className="text-2xl">{getCurrentTime()}</p>
            <p>{user?.username}</p>
          </div>
          <div>
            <p className="font-semibold cursor-pointer" onClick={handleLogout}>
              <FiLogOut className="text-3xl" />
            </p>
          </div>
        </div>
        {/* statistics */}
        <div>
          {loading ? (
            <div className="h-[60vh] w-full flex justify-center items-center">
              <Spinner message="Loading..." />
            </div>
          ) : (
            <div className="mt-5">
              {/* mission and vision */}
              <div className="my-4">
                {/* mission */}
                <div className="mb-10">
                  {currentMission?.map((text) => (
                    <div key={text._id}>
                      <form className="w-full" onSubmit={handleUpdateMission}>
                        <div className="flex flex-col sm:flex-row items-center gap-3 ">
                          <div className="flex-[0.9]">
                            <label
                              htmlFor="mission"
                              className="mb-2 font-semibold"
                            >
                              Update Mission Statement
                            </label>
                            <textarea
                              name="mission"
                              id="mission"
                              placeholder="Please enter mission"
                              value={mission}
                              onChange={(e) => setMission(e.target.value)}
                              className="w-full p-1 border-2 border-[#0067b8] rounded-lg outline-none"
                            ></textarea>
                          </div>
                          <div>
                            <button
                              className="bg-[#0067b8] text-white rounded-md p-2 mt-2 sm:mt-4"
                              onClick={() => setIdToUpdate(text._id)}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ))}
                </div>

                {/* vision */}
                <div>
                  {currentVision?.map((text) => (
                    <div key={text._id}>
                      <form className="w-full" onSubmit={handleUpdateVision}>
                        <div className="flex flex-col sm:flex-row items-center gap-3 ">
                          <div className="flex-[0.9]">
                            <label
                              htmlFor="vision"
                              className="mb-2 font-semibold"
                            >
                              Update Vision Statement
                            </label>
                            <textarea
                              name="vision"
                              id="vision"
                              placeholder="Please enter vision"
                              value={vision}
                              onChange={(e) => setVision(e.target.value)}
                              className="w-full p-1 border-2 border-[#0067b8] rounded-lg outline-none"
                            ></textarea>
                          </div>
                          <div>
                            <button
                              className="bg-[#0067b8] text-white rounded-md p-2 mt-2 sm:mt-4"
                              onClick={() => setIdToUpdate(text._id)}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ))}
                </div>
              </div>

              {/* statistics */}
              <div className="adminDashboard">
                {/* users */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/users")}
                >
                  <p id="dashIcon">
                    <MdOutlinePeopleAlt />
                  </p>
                  <p className="my-[20px]">users</p>
                  <p>{users?.length}</p>
                </div>

                {/* indemand */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/in-demand")}
                >
                  <p id="dashIcon">
                    <IoBookOutline />
                  </p>
                  <p className="my-[20px]">inDemand</p>
                  <p>{inDemand?.length}</p>
                </div>

                {/* inquiries */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/inquiries")}
                >
                  <p id="dashIcon">
                    <MdOutlineQuestionMark />
                  </p>
                  <p className="my-[20px]">inquiries</p>
                  <p>{inquiries?.length}</p>
                </div>

                {/* subscribed */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/sub")}
                >
                  <p id="dashIcon">
                    <MdOutlineMail />
                  </p>
                  <p className="my-[20px]">subscribed</p>
                  <p>{subscribed?.length}</p>
                </div>

                {/* testimonials */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/testimonials")}
                >
                  <p id="dashIcon">
                    <CiMicrophoneOn />
                  </p>
                  <p className="my-[20px]">testimonial</p>
                  <p>{testimonial?.length}</p>
                </div>

                {/* tracks */}
                <div
                  className=""
                  style={{ lineHeight: "0.4em" }}
                  onClick={() => navigate("/admin/tracks")}
                >
                  <p id="dashIcon">
                    <PiRoadHorizonDuotone />
                  </p>
                  <p className="my-[20px]">tracks</p>
                  <p>{tracks?.length}</p>
                </div>
              </div>
              {/* other data */}
              <div>
                {/* inquiries */}
                {inquiries?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-2xl font-semibold">Top Inquiries</p>

                    {inquiries.map((item) => (
                      <div
                        key={item._id}
                        className="bg-zinc-100 p-2 rounded-lg mb-4"
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
                        <p>
                          {item.inquiry.length > 100
                            ? `${item.inquiry.substring(0, 100)} ...`
                            : item.inquiry}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-zinc-400 text-sm">
                            {moment(item.createdAt).fromNow()}
                          </p>

                          {item.inqStatus === "pending" ? (
                            <>
                              <button className="blueBg p-2 rounded-md text-white">
                                Handled ?
                              </button>
                            </>
                          ) : (
                            <>
                              <p className="blueTxt font-semibold">Handled</p>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* testimonials */}
                {testimonial?.length > 0 && (
                  <div className="mt-5">
                    <p className="text-2xl font-semibold">
                      Latest Testimonials
                    </p>

                    {testimonial.map((item) => (
                      <div
                        key={item._id}
                        className="bg-zinc-100 p-2 rounded-lg mb-4"
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
                        <p>
                          {item.message.length > 100
                            ? `${item.message.substring(0, 100)} ...`
                            : item.message}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-zinc-400 text-sm">
                            {moment(item.createdAt).fromNow()}
                          </p>
                          {item.isVisible ? (
                            <>
                              <p className="blueTxt font-semibold">Approved</p>
                            </>
                          ) : (
                            <>
                              <button className="blueBg p-2 rounded-md text-white">
                                Approve ?
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default DashBoard;
