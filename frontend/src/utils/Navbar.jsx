import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 px-8 flex justify-between items-center">
      <div className="w-auto text-3xl text-white">CVExpress</div>
      <div className="w-[25%] flex justify-between items-center text-white">
        <p className="text-xl">Home</p>
        <p className="text-xl">Features</p>
        <p className="text-xl">Guide</p>
        <p className="text-xl">FAQs</p>
      </div>
      <div className="w-auto">
        <button
          type="button"
          className="border-2 px-6 py-1 text-white rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
