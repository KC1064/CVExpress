import React from "react";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FFF] px-10 py-8 flex justify-between items-center">
      <div
        style={{
          fontFamily: "header",
          fontSize: "32px",
        }}
      >
        RB.
      </div>
      <div
        className="flex gap-20 font-semibold justify-center items-center"
        style={{
          fontFamily: "text",
        }}
      >
        <div className="flex gap-8">
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Guide</a>
          <a href="">FAQs</a>
          <a href="">ATS Scanner</a>
        </div>
        <div className="flex gap-4">
          <Buttons type={"primary"} children={"LOGIN"} />
          <Buttons type={"secondary"} children={"SIGN UP"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
