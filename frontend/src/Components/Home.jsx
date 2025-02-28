import React from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import bg from "../assets/Image.png";

const Home = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
      className="w-full"
    >
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
