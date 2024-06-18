import React, { useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { login, reset } from "../../features/auth/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user?.username) {
      navigate("/admin");
    }

    if (navigator.onLine) {
      console.log("online");
    } else {
      toast.error("Network Error", { theme: "dark" });
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, isLoading, navigate]);

  const [loading, setLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!username) {
      return toast.error("username missing", { theme: "dark" });
    }

    if (!password) {
      return toast.error("password missing", { theme: "dark" });
    }

    try {
      setLoading(true);
      const userData = { username, password };
      await dispatch(login(userData));
      // navigate("/");
      localStorage.setItem("newLogIn", new Date().getTime());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to sign you in", { theme: "dark" });
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      {/* wrapper */}
      <div className="w-full">
        <form
          className=" w-[95%] sm:w-[70%]  md:w-[50%] xl:w-[30%] m-auto"
          onSubmit={handleSignin}
        >
          <div className="flex flex-col mb-5">
            <label htmlFor="username">
              <p className="font-semibold">Please Enter Username</p>
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
              <p className="font-semibold">Please Enter Password</p>
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
            {isLoading || loading ? (
              <>
                <Spinner message="Verifying" />
              </>
            ) : (
              <button
                className="w-full bg-[#0067b8] p-2 text-white rounded-tl-2xl rounded-br-2xl transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-tl-none hover:rounded-br-none "
                onClick={handleSignin}
              >
                Login Now ?
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
