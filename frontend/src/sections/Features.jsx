import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: "⚡",
      title: "Lightning-Fast Resume Creation",
      description:
        "Build a professional resume in under a minute. Simply input your details and a job description, and let ResumeBlitz generate a tailored resume instantly—perfect for busy job seekers.",
    },
    {
      icon: "🤖",
      title: "Powered by Advanced AI",
      description:
        "Leverage cutting-edge AI technology to craft impactful, job-specific content. From bullet points to summaries, our AI ensures your resume stands out to recruiters.",
    },
    {
      icon: "✅",
      title: "ATS-Optimized for Success",
      description:
        "Pass Applicant Tracking Systems with ease. ResumeBlitz identifies and incorporates key keywords from job descriptions, boosting your chances of landing interviews.",
    },
    {
      icon: "🎯",
      title: "Tailored to Your Career Goals",
      description:
        "Customize your resume with professional templates and AI-driven suggestions that align with your unique experience and aspirations, ensuring a perfect fit for every application.",
    },
    {
      icon: "📝",
      title: "Professional Cover Letters",
      description:
        "Generate a matching cover letter in seconds. Tailored to the same job description, your cover letter will complement your resume and impress hiring managers.",
    },
    {
      icon: "🔍",
      title: "Free ATS Scanner",
      description:
        "Check your resume's compatibility with Applicant Tracking Systems for free. Get a detailed report with tips to improve your score and increase your chances of getting noticed.",
    },
  ];

  return (
    <div
      className="w-full flex-col flex items-center justify-center mt-10 mb-8"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="font-[text-bold] text-5xl"
      >
        Why Choose Us
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full px-12 flex flex-wrap justify-between mt-10 gap-y-8 b"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-[30%] h-[350px] p-8 rounded-3xl border border-gray-900 font-[text]"
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
            <motion.div
              className="mt-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
