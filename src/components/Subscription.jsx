import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../axios";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Valid Gmail Required", { theme: "dark" });

    //verify that it is gmail.com
    if (email.length < 12)
      return toast.error("Email incomplete", { theme: "dark" });
    let verifyEmail = email.includes("gmail.com");
    if (verifyEmail === false) {
      toast.error("Enter Gmail address", { theme: "dark" });
      toast.warning("xxx@gmail.com", { theme: "dark" });
      return;
    }

    try {
      setLoading(true);
      let dataToSend = { email };
      let result = await axios.post("/subscribe", dataToSend);
      if (result) {
        setLoading(false);
        setSuccess(true);
        setEmail("");
      }
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setEmail("");
      toast.error("Try Again Later", { theme: "dark" });
    }
  };

  return (
    <div className="blueBg text-white">
      <div className="px-[10px] md:px-[2em]  xl:px-[5em] py-[50px] mt-[6em]">
        {/* wrapper */}
        <div>
          {/* txt side */}
          <div>
            <div
              className="text-center text-3xl font-semibold"
              style={{ lineHeight: "1em" }}
            >
              <p>Subscribe Now To Get</p>
              <p>Exclusive Information</p>
            </div>
            <p className="text-center text-sm">
              You will get the latest notifications about our programme.
            </p>
          </div>
          {/* form side */}
          <div className="flex justify-center mt-5">
            <form
              className=" w-full sm:w-[70%]  lg:w-[50%] 2xl:w-[30%]"
              onSubmit={handleSubscribe}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className=" w-full outline-none text-black p-2 bg-zinc-100  rounded-lg"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {success ? (
                  <div>
                    <p>Subscribed</p>
                  </div>
                ) : (
                  <>
                    {loading ? (
                      <p className="">wait...</p>
                    ) : (
                      <button
                        className="text-white subscribeBtn cursor-pointer p-2"
                        onClick={handleSubscribe}
                      >
                        Subscribe
                      </button>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
