import React from "react";
import Navbar from "../utils/Navbar";
import bg from "../assets/Image.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      // style={{
      //   background: `url(${bg})`,
      //   height: "100vh",
      //   width: "100%",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      // className="w-full"
    >
      <Navbar />
      <div className="h-[90vh] w-full flex justify-between px-4">
        <div className="h-[90vh] w-[40%] flex items-start flex-col justify-center gap-10">
          <h1 className="text-7xl tracking-tight text-white mt">
            Create Tailored Resumes <br />
            Effortlessly In Seconds
          </h1>
          <p className="text-2xl tracking-tight text-white">
            Elevate your job application with our intuitive resume builder.
            Highlight your unique skills and experiences to make a strong
            impression on employers.
          </p>
          <button type="button" className="w-[90%] flex justify-center border-2 border-white text-white py-2 rounded-3xl text-2xl text-left">Start Building Your Resume</button>
        </div>
        <div className="h-[90vh] w-[60%] flex items-center">
          <img src={`${hero}`} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
