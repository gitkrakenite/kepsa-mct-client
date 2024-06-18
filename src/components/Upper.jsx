import Learn3 from "../assets/l3.png";
import Learn7 from "../assets/l7.png";
import Learn8 from "../assets/l8.png";
import Learn9 from "../assets/l9.png";
import Micr from "../assets/microsoft.png";
import Kepsa from "../assets/KEPSA.png";

import Students from "../assets/students.jpg";

const Upper = () => {
  return (
    <div className=" px-[10px] md:px-[2em]  xl:px-[5em] mt-[80px]  md:mt-[130px] ">
      <div className="flex flex-col justify-center lg:flex-row gap-[30px] md:gap-[50px]">
        {/* txtside */}
        <div className="flex-[0.5] w-full relative">
          <div className="hidden md:block h-[40px] w-[40px] triangle absolute  top-0 right-0 left-0 rotate-in-center" />
          <div className="h-[60px] w-[60px] blueBg  absolute  top-0 right-0 rounded-lg hidden md:block slide-in-top" />
          <div className=" hidden md:block h-[50px] w-[50px] absolute blueBg bottom-0 left-0 rounded-full scale-in-center" />
          {/* upper DSEAP part */}
          <div className=" w-full ">
            <div className="mb-[10px]">
              <div>
                <h2
                  className="text-5xl text-zinc-600  mb-3 text-center"
                  style={{ fontWeight: 700 }}
                >
                  DSEAP
                </h2>
                <p className="text-center">
                  Digital Skills and Employment Advancement Program
                </p>
                <h2 className="text-2xl font-semibold mb-3 text-center">
                  Everybody Needs <span className="blueTxt">Education</span>
                </h2>
                <p className="text-center">Access Digital Skills Today</p>
              </div>
            </div>

            <div className="mb-[10px] text-center">
              <h6>Elevate Through Education</h6>
              <h6>#pavingtheway</h6>
            </div>
          </div>
          <p className="mb-[40px] mt-5 text-center">
            At DSEAP, we believe education should be a thrilling adventure for
            everyone. Our mission? To supercharge your life with essential
            digital skills, setting you on a path of endless possibilities and
            exciting growth. Join us as we champion the transformative power of
            learning and pave the way to a brighter future, one digital skill at
            a time.
          </p>

          {/* partners */}
          <div className=" mb-4 sm:mb-0">
            {/* <h2 className="text-center">In Collaboration</h2> */}
            <div className="flex justify-center items-center gap-10 mt-3">
              <img
                src={Kepsa}
                alt="kepsa"
                className=" h-[80px] sm:h-[100px] object-contain"
                loading="lazy"
              />
              <img
                src={Micr}
                alt="microsoft"
                className="h-[120px] object-contain"
              />
            </div>
          </div>
          {/* desktop version */}
          <div className="hidden sm:flex justify-center gap-3 my-4">
            <div>
              <p className="font-semibold">Available Tracks</p>
              <p className="font-bold text-lg text-center">4</p>
            </div>
            <p className="w-[5px] blueBg rounded-md" />
            <div>
              <p className="font-semibold">Resources</p>
              <p className="font-bold text-lg text-center">20+</p>
            </div>
            <p className="w-[5px] blueBg rounded-md" />
            <div>
              <p className="font-semibold">Testimonials</p>
              <p className="font-bold text-lg text-center">10+</p>
            </div>
            <p className="w-[5px] blueBg rounded-md" />
            <div>
              <p className="font-semibold">Mode Of Learning</p>
              <p className="font-bold text-lg text-center">Virtual</p>
            </div>
          </div>
          {/* mobile version */}
          <div className=" grid grid-cols-2 gap-2 sm:hidden  w-full">
            <div className="w-full text-center mb-14">
              <div className="flex w-full justify-center mb-4">
                <img loading="lazy" src={Learn3} alt="" className="w-[120px]" />
              </div>
              <p className="font-semibold">Available Tracks</p>
              <p className="font-bold text-lg text-center">4</p>
            </div>

            <div className="w-full text-center mb-14">
              <div className="flex w-full justify-center mb-4">
                <img loading="lazy" src={Learn7} alt="" className="w-[120px]" />
              </div>
              <p className="font-semibold">Resources</p>
              <p className="font-bold text-lg text-center">20+</p>
            </div>

            <div className="w-full text-center mb-14">
              <div className="flex w-full justify-center mb-4">
                <img loading="lazy" src={Learn8} alt="" className="w-[120px]" />
              </div>
              <p className="font-semibold">Testimonials</p>
              <p className="font-bold text-lg text-center">10+</p>
            </div>

            <div className="w-full text-center mb-14">
              <div className="flex w-full justify-center mb-4">
                <img loading="lazy" src={Learn9} alt="" className="w-[120px]" />
              </div>
              <p className="font-semibold">Mode Of Learning</p>
              <p className="font-bold text-lg text-center">Virtual</p>
            </div>
          </div>
        </div>

        {/* imgside */}
        <div className=" flex-[0.5] lg:flex-[0.4] relative   flex justify-center sm:justify-start">
          <img
            src={Students}
            alt=""
            loading="lazy"
            className=" object-cover rounded-lg imageHolder"
          />
        </div>
      </div>
    </div>
  );
};

export default Upper;
