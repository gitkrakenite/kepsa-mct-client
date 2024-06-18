import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { MdOutlineAllInclusive } from "react-icons/md";
import { FaSuperpowers } from "react-icons/fa";

import { FaCertificate } from "react-icons/fa6";

const Values = () => {
  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] sm:mt-[100px]  ">
      <div className="font-bold text-xl mb-[20px]">
        <h2
          className="font-bold text-2xl text-center mb-4"
          style={{ lineHeight: "1.3em" }}
        >
          Why Choose Us ?
        </h2>
        <p
          className="font-semibold text-center"
          style={{ lineHeight: "1.3em" }}
        >
          Choosing us means investing in your career growth. Gain the latest
          skills with top-notch trainers.
        </p>
      </div>

      <div className=" mt-[50px] mb-[2em] md:mt-[80px] flex flex-col lg:flex-row gap-[20px]">
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <MdOutlineAllInclusive className="text-3xl blueTxt" />
          </div>
          <h2 className="my-[10px]">Inclusivity</h2>
          <p>
            We are committed to ensuring learning resources are accessible to
            all learners, regardless of their background, abilities, and or
            circumstances.
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <HiOutlineCubeTransparent className="text-3xl blueTxt" />
          </div>
          <h2 className="my-[10px]">Flexibility</h2>
          <p>
            We offer courses that learners can access anytime, anywhere,
            allowing them to learn at their own pace and fit education into
            their busy schedules.
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <FaSuperpowers className="text-3xl blueTxt" />
          </div>
          <h2 className="my-[10px]">Collaboration</h2>
          <p>
            We foster a community environment where learners can interact, share
            ideas, and work together on projects, enhancing their learning
            through teamwork and peer support.
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <FaCertificate className="text-3xl font-bold blueTxt" />
          </div>
          <h2 className="my-[10px]">Certification</h2>
          <p>
            We award credible and recognized certificates to learners upon
            successful completion of a training program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
