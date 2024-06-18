import React from "react";

import { MdOutlineVerified } from "react-icons/md";

const GetInvolved = () => {
  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px]">
      <div>
        <h2
          className="font-bold text-2xl text-center mb-4"
          style={{ lineHeight: "1.3em" }}
        >
          Process Overview
        </h2>
        <p
          className="font-semibold text-center"
          style={{ lineHeight: "1.3em" }}
        >
          Major Steps Throughout Your Program.
        </p>

        <div className="flex justify-evenly gap-[30px] items-center mt-[50px]">
          {/* img side */}
          <div className="hidden md:block flex-[0.5]">
            <img
              src="https://img.freepik.com/free-photo/study-group-african-people_23-2149156386.jpg?t=st=1716453923~exp=1716457523~hmac=49db9f7f09d335600531a6b66ebe0353afe1a8541a5e857dff0035cb672f08c2&w=1380"
              alt=""
              className="rounded-md hidden md:block w-full max-h-[50vh] object-contain"
              loading="lazy"
            />
          </div>
          <div className=" flex-1 md:flex-[0.5]">
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3 hover:show-info">
              <p>
                <MdOutlineVerified className="blueTxt text-2xl" />
              </p>
              <div>
                <p>Send Out Your Details</p>
                <p className="more-info">
                  more information Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aliquid tempora obcaecati soluta. Quae,
                  ipsum! Ea repellat iure impedit nam blanditiis.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="blueTxt text-2xl" />
              </p>
              <div>
                <p>Start Learning Through The Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="blueTxt text-2xl" />
              </p>
              <p>Certificate Awarded</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default GetInvolved;
