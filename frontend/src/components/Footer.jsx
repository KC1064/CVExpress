import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EE4445] text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* ResumeBlitz Section */}
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold font-[text]">
            <span className="font-[header]">RB </span>ResumeBlitz
          </h3>
          <p className="mb-4 font-[text]">
            AI-powered resume generator that creates job-winning resumes in
            seconds.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className="text-xl font-bold font-[text-bold]">Quick Links</h3>
          <ul className="space-y-2 flex gap-3 font-[text]">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ATS Scanner
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="font-[text]">&copy; 2025 ResumeBlitz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
