import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Features from "../sections/Features";
import FAQs from "../sections/FAQs";
import Guide from "../sections/Guide";
import Scanner from "../sections/Scanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[75vh] overflow-hidden relative flex items-center">
        <div className="leading-[100px] pl-10">
          <p
            style={{
              fontFamily: "text-bold",
              fontSize: "100px",
            }}
            className="text-[#14242B]"
          >
            <span className="text-[#EE4445]">Fast</span> Resume
          </p>
          <p
            style={{
              fontFamily: "text-bold",
              fontSize: "100px",
            }}
            className="text-[#14242B]"
          >
            Creator <span className="text-[#EE4445]">Tailored</span>
          </p>
          <p
            style={{
              fontFamily: "text-bold",
              fontSize: "100px",
            }}
            className="text-[#14242B]"
          >
            To Your
          </p>
          <p
            style={{
              fontFamily: "text-bold",
              fontSize: "100px",
            }}
            className="text-[#EE4445]"
          >
            Career Goals
          </p>
        </div>
        <div className="overflow-hidden">
          <motion.img
            animate={{
              rotate: -180,
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            src="/images/circle.jpg"
            alt="circle"
            className="h-[300px] w-[300px] absolute bottom-[-72px] right-[-105px] rounded-full object-cover"
          />
        </div>
      </div>
      <div className="overflow-hidden bg-[#14242B] py-4">
        <div className="inline-flex">
          <motion.div
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap"
          >
            <div
              style={{
                fontFamily: "text",
                fontWeight: 800,
              }}
              className="flex items-center h-16 gap-10 text-white text-2xl px-4"
            >
              <span>★</span>
              <span>AI Resume Maker</span>
              <span>★</span>
              <span>Custom Cover Letters</span>
              <span>★</span>
              <span>ATS Friendly Content</span>
              <span>★</span>
              <span>AI Resume Maker</span>
              <span>★</span>
              <span>Custom Cover Letters</span>
              <span>★</span>
              <span>ATS Friendly Content</span>
            </div>
            <div
              style={{
                fontFamily: "text",
                fontWeight: 800,
              }}
              className="flex items-center h-16 gap-10 text-white text-2xl px-4"
            >
              <span>★</span>
              <span>AI Resume Maker</span>
              <span>★</span>
              <span>Custom Cover Letters</span>
              <span>★</span>
              <span>ATS Friendly Content</span>
              <span>★</span>
              <span>AI Resume Maker</span>
              <span>★</span>
              <span>Custom Cover Letters</span>
              <span>★</span>
              <span>ATS Friendly Content</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <Features />
        <FAQs />
        <Guide />
        <Scanner />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
