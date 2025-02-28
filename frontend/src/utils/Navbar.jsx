import React from "react";

const Navbar = () => {
  return (
    <div className="w-full text-white px-12 flex justify-between items-center h-24">
      <div style={{ fontFamily: "resist_medium" }}>
        <p className="text-3xl h-full">CVExpress</p>
      </div>
      <div style={{ fontFamily: "resist_medium" }} className="flex gap-8 items-center h-full">
        <p className="text-lg">Home</p>
        <p className="text-lg">Features</p>
        <p className="text-lg">Guide</p>
        <p className="text-lg">FAQs</p>
      </div>
      <div className="flex items-center h-full">
        <button
          style={{ fontFamily: "resist_medium" }}
          className="pointer bg-gradient-to-r from-[#5C3699] to-[#0C1052] border-2 px-4 py-1 rounded-md text-lg flex items-center"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
