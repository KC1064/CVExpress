import React from "react";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Scanner = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[text-bold] text-5xl text-[#14242B] mb-6">
            Free ATS Scanner
          </h1>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed font-[text]">
            Ensure your resume passes Applicant Tracking Systems with our Free ATS
            Scanner. Upload your resume for instant feedback and improve your
            chances of getting noticed by recruiters.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {[
              {
                icon: "📄",
                title: "Upload Your Resume",
                description: "Simply upload your resume in PDF or Word format."
              },
              {
                icon: "📝",
                title: "Provide Job Description",
                description: "Enter the job description for the position you are applying to."
              },
              {
                icon: "✨",
                title: "Scan and Receive Feedback",
                description: "Our scanner checks your resume against ATS criteria and provides instant feedback with actionable tips."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="font-[text-bold] text-xl mb-4 text-[#14242B]">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 font-[text] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Buttons type="primary">Scan Resume Now</Buttons>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Scanner;
