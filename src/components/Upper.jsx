import Micr from "../assets/microsoft.png";
import Kepsa from "../assets/KEPSA.png";
import startUp from "../assets/startUp.png";

const Upper = () => {
  return (
    <div className=" px-[10px] md:px-[2em]  xl:px-[5em] mt-[80px]  md:mt-[38px] ">
      <div className="flex flex-col justify-around items-center lg:flex-row gap-[30px] md:gap-[50px]">
        {/* txtside */}
        <div className="flex-[0.3] w-full relative ">
          <div className="hidden xl:block h-[40px] w-[40px] triangle absolute  top-0 right-0 left-[-3em] rotate-in-center" />
          <div className="h-[60px] w-[60px] blueBg  absolute  top-0 right-[-8em] rounded-lg hidden md:block slide-in-top" />
          <div className=" hidden xl:block h-[50px] w-[50px] absolute blueBg bottom-0 left-[-3em] rounded-full scale-in-center" />
          {/* upper DSEAP part */}
          <div className=" w-full ">
            <div className="mb-[10px]">
              <div>
                <h2
                  className="text-6xl text-zinc-600  mb-3 text-center"
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

            <p className="font-semibold text-xl text-center mt-8">
              Chart your course. Learn AI today.
            </p>
            <p className="mt-[-1em] mb-[0.7em] text-center">
              Unlock new opportunities with AI skills that are in demand now and
              in
            </p>
          </div>

          <div className="mb-[0.7em]">
            <div className="flex w-full justify-center mb-7">
              <a
                href="https://kepsa-dseap.azurefd.net/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#0067b8] text-white px-8 xl:px-16 py-3 rounded-md mt-4 text-xl text-center "
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* partners */}
          <div className="  sm:mb-0">
            <div className="flex items-center justify-center gap-10 mt-3">
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
                loading="lazy"
              />
            </div>
          </div>

          {/* desktop version */}
          {/* <div className="hidden sm:flex justify-center gap-3 my-4">
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
          </div> */}
          {/* mobile version */}
          {/* <div className=" grid grid-cols-2 gap-2 sm:hidden  w-full">
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
          </div> */}
        </div>
        {/* imgside */}
        <div className=" flex-[0.5] lg:flex-[0.5] relative  ">
          {/* <img
            src={Students}
            alt=""
            loading="lazy"
            className=" object-cover rounded-lg imageHolder"
          /> */}
          <img
            src={startUp}
            alt=""
            className=" w-[500px] xl:w-full h-full  object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Upper;
