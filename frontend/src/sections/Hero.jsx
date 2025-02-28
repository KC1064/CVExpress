import React from "react";
import Navbar from "../utils/Navbar";
import bg from "../assets/Image.png";

const Hero = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=""
    >
      <Navbar />
    </div>
  );
};

export default Hero;
