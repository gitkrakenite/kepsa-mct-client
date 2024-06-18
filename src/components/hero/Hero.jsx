import Carousel from "react-bootstrap/Carousel";

import "./hero.css";

const Hero = () => {
  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px]">
      {/* desktop Caraousel hidden md:block*/}
      <div>
        <Carousel prevIcon={false} nextIcon={false}>
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <img
              className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/7181493/pexels-photo-7181493.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  DSEAP CHAPTER 2
                </h3>
                <p className=" text-zinc-300 tracking-wider mb-[45px]">
                  Promoting Sustainable Community Transformation through
                  Education
                </p>
                <p className=" hidden md:block text-zinc-300 tracking-wider pb-2">
                  Our strategy focuses on fostering unity and collaboration
                  within the community through accessible and sustainable
                  education. By implementing online projects that encourage
                  teamwork, mutual support, and shared learning goals, we align
                  with our vision of universal access to digital skills. We
                  believe that when communities grow through education, everyone
                  rises together, driving transformation and
                  reducing unemployment.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* second */}
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <div className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl blueBg" />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />

            <Carousel.Caption className=" h-full flex  items-center">
              <div>
                <h2
                  className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Empower, Engage, Transform
                </h2>
                <p className=" text-zinc-300 tracking-wider  mb-[45px]">
                  Driving Community Transformation by Empowering Individuals on
                  a Journey to a Brighter Future
                </p>
                <p className=" hidden md:block text-zinc-300 tracking-wider  pb-2">
                  Empowerment starts with the individual, focusing on education,
                  skill-building, and personal development. Our approach aligns
                  with our vision of universal access to digital skills by
                  fostering platforms for open communication, active
                  participation, and collaboration. By engaging the community in
                  this transformative journey, we aim to drive significant
                  change, reduce unemployment, and create a
                  brighter future for all.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* third */}
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <img
              className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/14456845/pexels-photo-14456845.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
              loading="lazy"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <div>
                <h3
                  className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                  style={{ fontWeight: 700 }}
                >
                  Transform Communities
                </h3>
                <p className=" text-zinc-300 tracking-wider  mb-[45px]">
                  Through strategic initiatives, we aim to create a ripple
                  effect that elevates lives and transforms entire communities.
                </p>
                <p className="hidden md:block text-zinc-300 tracking-wider pb-2">
                  Our strategic initiatives are designed to align with our
                  vision of universal access to digital skills, driving
                  transformation, and reducing unemployment. Our holistic
                  approach addresses diverse educational needs, fosters
                  groundbreaking initiatives, and promotes sustainable
                  development. Key elements of our strategy include enhancing
                  educational access, driving innovative solutions, and
                  supporting sustainable growth.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
