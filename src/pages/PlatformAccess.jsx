import React from "react";

import Learn10 from "../assets/l10.gif";

const PlatformAccess = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div>
        <img src={Learn10} alt="" loading="lazy" />
        <h2 className="text-center">👋 Hello There</h2>
        <p className="text-center">
          We'll let you know when we're ready for you
        </p>
      </div>
    </div>
  );
};

export default PlatformAccess;
