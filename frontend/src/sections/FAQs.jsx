import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  // Track open/closed state for each FAQ item separately
  const [openId, setOpenId] = useState(null);
  
  
    const faqs =  [
      {
        "id": 1,
        "question": "How quickly can I create a resume with ResumeBlitz?",
        "desc": "With ResumeBlitz, you can create a professional resume in under a minute, making it ideal for job seekers on tight schedules. Simply input your personal details such as work experience, education, and skills, along with a job description, and our advanced AI technology will instantly generate a tailored resume. This streamlined process eliminates the hassle of manual formatting, allowing you to focus on applying to your dream job faster."
      },
      {
        "id": 2,
        "question": "Will my resume be compatible with Applicant Tracking Systems?",
        "desc": "Yes, ResumeBlitz is designed to ensure your resume is fully compatible with Applicant Tracking Systems (ATS) used by many employers. Our AI analyzes the job description you provide and identifies critical keywords and phrases that ATS software looks for, such as specific skills or qualifications. It then seamlessly incorporates these keywords into your resume, increasing your chances of passing the initial screening and getting noticed by recruiters."
      },
      {
        "id": 3,
        "question": "Can I customize my resume to match my career goals?",
        "desc": "Absolutely! ResumeBlitz empowers you to create a resume that reflects your unique career goals and aspirations. Our platform offers a variety of professional templates, ranging from modern to classic designs, so you can choose one that best suits your industry and style. Additionally, our AI provides tailored suggestions to enhance your content, ensuring that your experience and skills are presented in a way that aligns perfectly with the roles you’re targeting."
      },
      {
        "id": 4,
        "question": "Does ResumeBlitz also generate cover letters?",
        "desc": "Yes, ResumeBlitz includes a powerful cover letter generator to complement your resume. In just seconds, you can create a professional cover letter that’s tailored to the same job description as your resume, ensuring consistency in tone and content. The AI crafts a compelling narrative that highlights your strengths and enthusiasm for the role, helping you make a strong first impression on hiring managers and increasing your chances of landing an interview."
      },
      {
        "id": 5,
        "question": "Is the ATS scanner really free to use?",
        "desc": "Yes, our ATS scanner is completely free and accessible to all users. Simply upload your resume, and ResumeBlitz will analyze it against the job description you provide, giving you a detailed compatibility score out of 100. The report includes actionable tips, such as adding missing keywords or adjusting formatting, to improve your score. This feature helps you optimize your resume for ATS filters at no cost, ensuring you’re ready to apply with confidence."
      }
    ]


  return (
    <div className="px-8 py-12 bg-[#22333A] text-white">
      <div className="max-w-7xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div 
            key={faq.id}
            className="border-b border-gray-700 pb-4 text-[bold]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: faq.id * 0.1 }}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <p className="font-extrabold font-[text-bold] text-lg">
                {faq.question}
              </p>
              <motion.p 
                className="text-2xl"
                animate={{ rotate: openId === faq.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.p>
            </div>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {faq.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
