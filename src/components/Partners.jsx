import React from "react";
import Micr from "../assets/microsoft.png";
import Kepsa from "../assets/KEPSA.png";

const Partners = () => {
  return (
    <div className=" mt-[4em] mb-[3em]  px-[10px] md:px-[2em] xl:px-[5em]  pb-[20px]">
      <div className="">
        <h2 className="text-center">In Collaboration</h2>
        <div className="flex justify-center gap-10 mt-[2.5em]">
          <img
            src={Kepsa}
            alt="kepsa"
            className="h-[120px] object-contain"
            loading="lazy"
          />
          <img
            src={Micr}
            alt="microsoft"
            className="h-[120px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
