import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import axios from "../axios";

const CreateUser = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateUser = async () => {
    if (!username) {
      return toast.error("username missing", { theme: "dark" });
    }
    if (!password) {
      return toast.error("password missing", { theme: "dark" });
    }
    try {
      setLoading(true);
      let dataToSend = { username, password };
      let result = await axios.post("/users/", dataToSend);
      if (result.data) {
        toast.success("Action Success", { theme: "dark" });
        setLoading(false);
      }

      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      toast.error("Failed To Add new", { theme: "dark" });
    }
  };

  return (
    <div className="">
      {/* close btn */}
      {/* data */}
      <div className="pop-up-content prompt px-3">
        <div className="flex justify-center mb-[50px] mt-[50px] z-[999] hide-scrollbar">
          <button onClick={onClose}>
            <AiOutlineClose
              className="text-5xl text-white p-[10px] rounded-full "
              style={{
                border: "2px solid #0067b8",
                position: "sticky",
                top: "60px",
              }}
              title="close"
            />
          </button>
        </div>
        <div className=" h-[70vh] sm:h-[60vh] overflow-y-scroll prompt">
          <form
            className=" w-[95%] sm:w-[70%]  md:w-[50%] xl:w-[30%] m-auto"
            onSubmit={handleCreateUser}
          >
            <div className="flex flex-col mb-5">
              <label htmlFor="username">
                <p className="font-semibold text-zinc-400">
                  Create New Username
                </p>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-[#0067b8] p-1 rounded-lg outline-none"
                required
                maxLength={15}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password">
                <p className="font-semibold text-zinc-400">
                  Create New Password
                </p>
              </label>
              <input
                type="password"
                placeholder="password"
                className="border-2 border-[#0067b8] p-1 rounded-lg outline-none"
                required
                maxLength={15}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              {loading ? (
                <>
                  <Spinner message="Updating" />
                </>
              ) : (
                <button
                  className="w-full bg-[#0067b8] p-2 text-white rounded-tl-2xl rounded-br-2xl transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-tl-none hover:rounded-br-none "
                  onClick={handleCreateUser}
                >
                  Add New Account
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
