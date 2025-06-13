import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = ({ isOpen, onClose, onSwitchToSignUp }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-transparent backdrop-blur-xl bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="bg-white p-0 rounded-lg w-[800px] h-[500px] overflow-hidden border-2 border-black/55 flex"
          >
            {/* Left Side - Image */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <img
                src="images/Login.png"
                alt="Sign Up Visual"
                className="w-full  object-cover"
              />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-1/2 p-8 relative flex flex-col justify-center items-center">
              
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 rounded-full overflow-hidden"
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              {/* Content Centered */}
              <div className="w-full max-w-sm flex flex-col items-center gap-y-6">
                {/* Title */}
                <div className="text-center">
                  <h2
                    className="text-2xl font-bold"
                    style={{ fontFamily: "text" }}
                  >
                    Login
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Welcome back! Please login to continue.
                  </p>
                </div>

                {/* Form */}
                <form className="w-full space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D22223] text-white py-2 rounded-md font-bold hover:bg-[#b31d1e] transition-colors"
                  >
                    Login
                  </button>
                </form>

                {/* Sign Up Prompt */}
                <div className="text-sm text-gray-500 text-center">
                  Don't have an account?{" "}
                  <span
                    className="text-[#D22223] font-medium cursor-pointer"
                    onClick={onSwitchToSignUp}
                  >
                    Sign Up
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPage;
