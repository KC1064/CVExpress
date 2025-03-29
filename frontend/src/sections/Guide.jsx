import React from "react";
import { motion } from "framer-motion";

const Guide = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up and Log In",
      description:
        "Create an account on ResumeBlitz or log in if you already have one.",
      icon: "👤",
    },
    {
      id: 2,
      title: "Input Your Details",
      description:
        "Enter your personal information, work experience, education, and skills.",
      icon: "📝",
    },
    {
      id: 3,
      title: "Select a Job Description",
      description:
        "Copy and paste the job description of the position you are applying for.",
      icon: "📋",
    },
    {
      id: 4,
      title: "Generate Your Resume",
      description:
        'Use the "Lightning-Fast Resume Creation" feature to instantly generate a tailored resume.',
      icon: "⚡",
    },
    {
      id: 5,
      title: "Review and Optimize",
      description:
        'Utilize the "Free ATS Scanner" to check your resume\'s compatibility with Applicant Tracking Systems.',
      icon: "✅",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <motion.h2 
        className="font-bold text-center mb-20 text-[#14242B] font-[text-bold] text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        How ResumeBlitz Works
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 font-[text]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="bg-[#FF9A9B] rounded-2xl p-8 h-full text-black"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.span 
                    className="text-sm font-mono bg-white/10 text-black px-3 py-1 rounded-full font-extrabold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Step {step.id}
                  </motion.span>
                </div>

                <h3 className="text-xl font-[text-bold] mb-3 text-black font-extrabold">
                  {step.title}
                </h3>
                <p className="text-black/80 font-bold text-sm leading-relaxed">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                      className="opacity-50"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;
