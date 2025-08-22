import { ByRole, ByTopic } from "../dummyData";
import Mic from "../assets/microsoft.png";
import Linkedin from "../assets/linkedin.png";
import Assess from "../assets/assess.png";
import YouTubeVideo from "./YouTubeVideo";
import ReactGA from "react-ga4";

const Tracks = () => {
  return (
    <div className=" mb-[1em]  sm:mb-[2em]  px-[10px] md:px-[2em] xl:px-[5em]  pb-[20px] mt-[3em]">
      {/*  */}
      <div className="text-center">
        <p className="font-bold text-xl">
          Explore the possibilities and start learning
        </p>
        <p className="text-sm mt-[-0.3em]">
          Jumpstart your AI learning to enhance your work now and get ready for
          in-demand jobs in the future
        </p>
        <a
          href="https://kepsa-dseap.azurefd.net/"
          target="_blank"
          rel="noreferrer"
        >
          Explore our e-learning platform
        </a>
      </div>

      {/* learn by topic */}
      <div className="mt-[1em]">
        <p className="font-semibold text-xl">Learn by topic</p>
        <p className="text-sm mt-[-0.3em]">
          Develop skills for the technology and AI that enhance productivity and
          creativity for everyone.
        </p>

        <div className="tracksGrid">
          {ByTopic.map((topic, index) => (
            <div key={index} className="cardShadow p-3 rounded-lg">
              <a
                href="https://kepsa-dseap.azurefd.net/"
                style={{ color: "inherit" }}
                onClick={() => {
                  ReactGA.event({
                    category: "By Topic",
                    action: "Clicked on a track",
                    label: topic.title,
                  });
                }}
              >
                <img
                  src={topic.photo}
                  alt=""
                  className="rounded-xl max-h-[200px] w-full"
                />
                <p className="text-blue-600 mt-3 font-bold">{topic.tag}</p>
                <p className="text-lg font-bold">{topic.title}</p>
                <p>{topic.desc}</p>
                <div>
                  <div className="flex justify-between items-center mt-3">
                    <img src={Mic} alt="" className="w-[85px]" />
                    <img src={Linkedin} alt="" className="w-[85px]" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* learn by role */}
      <div className="mt-[3em]">
        <p className="font-semibold text-xl">Learn by role</p>
        <p className="text-sm mt-[-0.3em]">
          Find skills that enhance your work at any level and in any
          organization.
        </p>

        <div className="tracksGrid ">
          {ByRole.map((topic, index) => (
            <div key={index} className="cardShadow p-3 rounded-lg">
              <a
                href="https://kepsa-dseap.azurefd.net/"
                style={{ color: "inherit" }}
                onClick={() => {
                  ReactGA.event({
                    category: "By Role",
                    action: "Clicked on a track",
                    label: topic.title,
                  });
                }}
              >
                <img
                  src={topic.photo}
                  alt=""
                  className="rounded-xl max-h-[200px] object-cover w-full"
                />
                <p className="text-blue-600 mt-3 font-bold">{topic.tag}</p>
                <p className="text-lg font-bold">{topic.title}</p>
                <p>{topic.desc}</p>
                <div className="flex justify-between items-center mt-3">
                  <img src={Mic} alt="" className="w-[85px]" />
                  <img src={Linkedin} alt="" className="w-[85px]" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[4em]" />
      {/* Assess Your skills */}
      <div className=" mt-0 sm:mt-[2em] flex flex-col md:flex-row justify-evenly items-center gap-[30px] md:gap-[70px]">
        <div className="flex-[0.5]">
          <p className="text-3xl font-semibold">Assess your skills</p>
          <p className=" my-4 sm:my-16">
            Need help deciding where to start? Use the free Digital Skills
            Compass assessment to find the right place to begin learning. Answer
            a few quick questions and get a personalized action plan.
          </p>
          <a
            href="https://skills.ai4sp.org/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0067b8] text-white px-6 lg:px-10 py-3 rounded-md mt-4 lg:text-xl text-center"
          >
            Start the skills assessment
          </a>
        </div>
        <div className="flex-[0.5]">
          <img src={Assess} alt="" />
        </div>
      </div>

      <YouTubeVideo />
    </div>
  );
};

export default Tracks;
