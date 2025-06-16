import React, { useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const SignUp = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/v1/signup",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      onClose(); // Close the signup modal on success
    } catch (err) {
      console.error("Signup failed:", err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data.message : "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                src="images/signup.png"
                alt="Sign Up Visual"
                className="w-full  object-cover"
              />
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-1/2 p-8 relative flex flex-col justify-center items-center">
              {/* Close Button in Top-Right */}
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
                    Sign Up
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Create your account to get started
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm font-medium">{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D22223] text-white py-2 rounded-md font-bold cursor-pointer hover:bg-[#b31d1e] transition-colors disabled:opacity-50"
                  >
                    {loading ? "Signing up..." : "Sign Up"}
                  </button>
                </form>

                <div className="text-sm text-gray-500 text-center">
                  Already have an account?{" "}
                  <span
                    className="text-[#D22223] font-medium cursor-pointer"
                    onClick={onSwitchToLogin}
                  >
                    Login
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

export default SignUp;
