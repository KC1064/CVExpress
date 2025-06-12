import React from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-gradient-to-tr from-gray-100 to-white">
      <motion.main
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-[65%] w-[50%] border-2 border-black flex justify-evenly rounded-2xl shadow-2xl bg-white overflow-hidden"
      >
        {/* Left Section */}
        <div className="w-[45%] h-full relative flex items-center justify-center p-4">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
            src="./images/signup.png"
            alt="Signup"
            className="h-full w-full object-contain rounded-lg"
          />
          <p className="absolute bottom-2 right-2 text-sm text-gray-600 font-semibold">
            Welcome to <span className="text-blue-600">ResumeBlitz</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-[45%] h-full flex flex-col justify-center gap-5 p-4">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-max rounded-full border-2 border-gray-300 shadow-md mx-auto"
          >
            <User size={44} className="text-[#EE4444] h-max w-max p-2" />
          </motion.div>

          <div className="flex flex-col gap-4">
            {["John Doe", "john.doe@gmail.com", "Password"].map(
              (placeholder, index) => (
                <motion.input
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 * (index + 1),
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 0 3px rgba(59,130,246,0.5)",
                  }}
                  whileHover={{ scale: 1.01 }}
                  type={
                    placeholder === "Password"
                      ? "password"
                      : placeholder.includes("@")
                      ? "email"
                      : "text"
                  }
                  placeholder={placeholder}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              )
            )}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
            //   backgroundColor: "#2563eb",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-2 bg-[#EE4444] text-white py-2 px-4 rounded-md transition-all duration-300 shadow-md"
          >
            Create Account
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-sm text-gray-600 text-center"
          >
            Already Registered?{" "}
            <motion.span
              whileHover={{ scale: 1.05}}
              transition={{ duration:1 }}
              className="cursor-pointer font-medium"
            >
              Login
            </motion.span>
          </motion.p>
        </div>
      </motion.main>
    </section>
  );
};

export default SignUp;
