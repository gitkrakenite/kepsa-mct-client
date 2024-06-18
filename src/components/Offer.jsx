import React from "react";

const Offer = () => {
  return (
    <div className="blueBg text-white">
      <div className="px-[10px] md:px-[2em]  xl:px-[5em] py-[50px] mt-[1em]">
        <p className="t-semibold text-xl text-center">WHAT WE OFFER</p>
        <div
          style={{ lineHeight: "1.4em" }}
          className="my-3 text-lg sm:text-2xl mb-[1em] text-center"
        >
          <p>Exciting learning tracks based on your skill level</p>
          <p>& industry connection</p>
        </div>
        <div className="mt-[4em] flex flex-col lg:flex-row gap-10">
          {/* learn */}
          <div>
            <p className="font-semibold">LEARNING TRACKS</p>
            <p>
              Dive into our dynamic learning tracks tailored to your skill
              level, each designed to align seamlessly with industry demands.
              Explore the latest in-demand, cutting-edge technological skills
              crafted for your success. With convenience and quality at the
              forefront, embark on a journey where expertise meets innovation.
              Welcome to Learning Tracks - where your future meets possibility,
              and growth knows no bounds.
            </p>
          </div>
          {/* matching */}
          <div>
            <p className="font-semibold">INDUSTRY MATCHING</p>
            <p>
              Showcase your talent and dedication, and we'll connect you with
              top opportunities in your field. Join us and forge your path to
              success with our support. Seize the chance to thrive in a world of
              endless possibilities. Welcome to a community where talent meets
              opportunity, and dreams take flight!
            </p>
          </div>
          {/* labour market */}
          <div>
            <p className="font-semibold">LABOUR MARKET INFORMATION</p>
            <p>
              We offer Labor Market Information (LMI), providing essential data
              and insights on workforce and employment trends within specific
              regions or industries. Our LMI encompasses employment rates, job
              vacancies, wages, labor force participation, skills requirements,
              industry trends, workforce demographics, and economic indicators.
              We empower job seekers to make informed decisions regarding career
              choices, training, and economic strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
