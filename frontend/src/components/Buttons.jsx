import React from "react";
import { motion } from "framer-motion";

const Buttons = ({ type, children, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      style={{
        fontFamily: "text",
      }}
      className={`${
        type == "primary"
          ? "bg-[#D22223] text-white"
          : "border-2 border-[#D22223] text-black"
      } min-h-[36px] px-6 py-2 font-extrabold text-center cursor-pointer whitespace-nowrap`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(210, 34, 35, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      {children}
    </motion.button>
  );
};

export default Buttons;
