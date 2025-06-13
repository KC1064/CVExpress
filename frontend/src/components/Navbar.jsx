import React, { useState } from "react";
import Buttons from "./Buttons";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  const handleSwitchToSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
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
            <Buttons type={"primary"} onClick={() => setIsLoginOpen(true)}>LOGIN</Buttons>
            <Buttons type={"secondary"} onClick={() => setIsSignUpOpen(true)}>SIGN UP</Buttons>
          </div>
        </div>
      </div>
      <LoginPage 
        isOpen={isLoginOpen} 
        onClose={handleCloseModals}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      <SignUp 
        isOpen={isSignUpOpen} 
        onClose={handleCloseModals}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default Navbar;
