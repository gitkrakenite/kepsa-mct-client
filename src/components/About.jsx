import Photo from "../assets/l4.gif";

import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold value as needed
    triggerOnce: true, // Stop observing after the first time the element comes into view
  });

  return (
    <div className=" mb-[1em]  sm:mb-[4em]  px-[10px] md:px-[2em] xl:px-[5em]  pb-[20px]">
      {/* description */}
      <div className="flex gap-5 flex-col-reverse md:flex-row items-center mb-[1em] mt-[4em] sm:mt-0">
        {/* text */}
        <div className="flex-1 lg:flex-[0.5] sm:mt-[120px]  relative">
          <h2 className="mb-4">Who Are We ?</h2>
          <p>
            Born from an exciting collaboration between Microsoft and KEPSA, the
            Digital Skills and Employment Advancement Program (DSEAP) is here to
            empower you with top-notch digital skills designed for the future.
          </p>

          <p className="mb-[40px] mt-5 text-center">
            At DSEAP, we believe education should be a thrilling adventure for
            everyone. Our mission? To supercharge your life with essential
            digital skills, setting you on a path of endless possibilities and
            exciting growth. Join us as we champion the transformative power of
            learning and pave the way to a brighter future, one digital skill at
            a time.
          </p>

          {/* focus areas */}
          <div>
            <p className="font-semibold my-6">Primary Focus Areas</p>
          </div>

          {/*  */}
        </div>
        {/* image side */}
        <div className=" hidden lg:block flex-[0.5]   relative">
          <div
            ref={ref}
            className={`triangle hidden md:flex absolute bottom-0 left-0 ${
              inView && "rotate-in-center"
            }`}
          />

          <div
            ref={ref}
            className={`"hidden md:flex absolute top-[-40px] right-0 bg-[#0067b8] h-[300px] w-[30px] rounded-bl-[80px] rounded-br-[30px] ${
              inView && "fade-in"
            }`}
          />

          <div className="h-[40px] w-[40px] bg-[#0067b8] rounded-full absolute bottom-0 right-0  " />

          <div className="w-full flex justify-center relative">
            <img src={Photo} loading="lazy" alt="" className=" max-h-[480px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
