import React from "react";
import logo from "../assets/rem.png";
const TopStrip = () => {
  return (
    <div
      className=" px-[10px] md:px-[2em]  xl:px-[5em] mt-[80px]  md:mt-[100px] "
      style={{ borderBottom: "4px solid #e5e5e5" }}
    >
      <div className="flex items-center justify-between ">
        <div className="flex gap-4">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <p className="font-bold text-lg hidden lg:block">
              Take the power of Copilot on the go with the free mobile app
            </p>
            <p className="mt-[-1em] text-sm hidden lg:block">
              Create images and get tailored answers based on your interests and
              needs anytime, anywhere
            </p>
          </div>
        </div>
        <div>
          <a
            href="https://www.microsoft.com/microsoft-copilot/for-individuals/copilot-app?form=MY02FX&OCID=MY02FX"
            style={{ color: "inherit" }}
            className="bg-[#0067b8] text-white px-4 py-2 rounded-md"
          >
            Get the Copilot app
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
