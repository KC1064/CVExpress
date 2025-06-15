import React, { useState } from "react";
import {
  Check,
  Settings,
  Users,
  Bell,
  Plus,
  Trash2,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Code,
} from "lucide-react";

// Custom Stepper Components
const QontoStepIcon = ({ active, completed, stepNumber }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center w-6 h-6">
        <Check className="w-5 h-5 text-purple-600" />
      </div>
    );
  }

  return (
    <div
      className={`w-2 h-2 rounded-full ${
        active ? "bg-purple-600" : "bg-gray-300"
      }`}
    />
  );
};

const ColorlibStepIcon = ({ active, completed, stepNumber }) => {
  const icons = {
    1: <User className="w-6 h-6" />,
    2: <GraduationCap className="w-6 h-6" />,
    3: <Briefcase className="w-6 h-6" />,
    4: <FolderOpen className="w-6 h-6" />,
    5: <Code className="w-6 h-6" />,
  };

  const bgClass =
    active || completed
      ? "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 shadow-lg"
      : "bg-gray-400";

  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${bgClass}`}
    >
      {icons[stepNumber]}
    </div>
  );
};

const ColorfulStepper = ({ steps, activeStep }) => {
  return (
    <div className="flex items-center justify-between w-full mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <ColorlibStepIcon
              active={index === activeStep}
              completed={index < activeStep}
              stepNumber={index + 1}
            />
            <span
              className={`mt-2 text-xs font-medium text-center ${
                index <= activeStep ? "text-gray-800" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 ${
                index < activeStep
                  ? "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600"
                  : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function ResumeBuilderStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    github: "",
    phoneNo: "",
    location: "",
    externalLinks: "",
    linkedIn: "",

    // Education
    educations: [
      {
        collegeName: "",
        degreeName: "",
        coursework: "",
        date: "",
        location: "",
        score: "",
      },
    ],

    // Experience
    experiences: [
      {
        position: "",
        companyName: "",
        responsibilities: "",
        yearsOfWork: "",
      },
    ],

    // Projects
    projects: [
      {
        projectName: "",
        skills: "",
        dates: "",
        bulletPoints: "",
      },
    ],

    // Skills
    skills: "",
  });

  const steps = [
    "Personal Info",
    "Education",
    "Experience",
    "Projects",
    "Skills",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      fullName: "",
      email: "",
      github: "",
      phoneNo: "",
      location: "",
      externalLinks: "",
      linkedIn: "",
      educations: [
        {
          collegeName: "",
          degreeName: "",
          coursework: "",
          date: "",
          location: "",
          score: "",
        },
      ],
      experiences: [
        {
          position: "",
          companyName: "",
          responsibilities: "",
          yearsOfWork: "",
        },
      ],
      projects: [
        {
          projectName: "",
          skills: "",
          dates: "",
          bulletPoints: "",
        },
      ],
      skills: "",
    });
  };

  const handleInputChange = (field) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayInputChange = (section, index, field) => (event) => {
    const newArray = [...formData[section]];
    newArray[index] = {
      ...newArray[index],
      [field]: event.target.value,
    };
    setFormData((prev) => ({
      ...prev,
      [section]: newArray,
    }));
  };

  const addArrayItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const removeArrayItem = (section, index) => {
    if (formData[section].length > 1) {
      const newArray = formData[section].filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        [section]: newArray,
      }));
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange("fullName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub
                </label>
                <input
                  type="text"
                  value={formData.github}
                  onChange={handleInputChange("github")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phoneNo}
                  onChange={handleInputChange("phoneNo")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange("location")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn
                </label>
                <input
                  type="text"
                  value={formData.linkedIn}
                  onChange={handleInputChange("linkedIn")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  External Links
                </label>
                <input
                  type="text"
                  value={formData.externalLinks}
                  onChange={handleInputChange("externalLinks")}
                  placeholder="Portfolio, Website, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Education</h3>
              <button
                type="button"
                onClick={() =>
                  addArrayItem("educations", {
                    collegeName: "",
                    degreeName: "",
                    coursework: "",
                    date: "",
                    location: "",
                    score: "",
                  })
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Education
              </button>
            </div>
            {formData.educations.map((education, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 relative"
              >
                {formData.educations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("educations", index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      College Name
                    </label>
                    <input
                      type="text"
                      value={education.collegeName}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "collegeName"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree Name
                    </label>
                    <input
                      type="text"
                      value={education.degreeName}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "degreeName"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coursework (Optional)
                    </label>
                    <input
                      type="text"
                      value={education.coursework}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "coursework"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="text"
                      value={education.date}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "date"
                      )}
                      placeholder="e.g., 2020-2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={education.location}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "location"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Score/GPA
                    </label>
                    <input
                      type="text"
                      value={education.score}
                      onChange={handleArrayInputChange(
                        "educations",
                        index,
                        "score"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Experience</h3>
              <button
                type="button"
                onClick={() =>
                  addArrayItem("experiences", {
                    position: "",
                    companyName: "",
                    responsibilities: "",
                    yearsOfWork: "",
                  })
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </button>
            </div>
            {formData.experiences.map((experience, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 relative"
              >
                {formData.experiences.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("experiences", index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      value={experience.position}
                      onChange={handleArrayInputChange(
                        "experiences",
                        index,
                        "position"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={experience.companyName}
                      onChange={handleArrayInputChange(
                        "experiences",
                        index,
                        "companyName"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Work
                    </label>
                    <input
                      type="text"
                      value={experience.yearsOfWork}
                      onChange={handleArrayInputChange(
                        "experiences",
                        index,
                        "yearsOfWork"
                      )}
                      placeholder="e.g., 2022-2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Responsibilities
                    </label>
                    <textarea
                      value={experience.responsibilities}
                      onChange={handleArrayInputChange(
                        "experiences",
                        index,
                        "responsibilities"
                      )}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Describe your key responsibilities and achievements..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Projects</h3>
              <button
                type="button"
                onClick={() =>
                  addArrayItem("projects", {
                    projectName: "",
                    skills: "",
                    dates: "",
                    bulletPoints: "",
                  })
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>
            {formData.projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 relative"
              >
                {formData.projects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem("projects", index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Name
                    </label>
                    <input
                      type="text"
                      value={project.projectName}
                      onChange={handleArrayInputChange(
                        "projects",
                        index,
                        "projectName"
                      )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Skills Used
                    </label>
                    <input
                      type="text"
                      value={project.skills}
                      onChange={handleArrayInputChange(
                        "projects",
                        index,
                        "skills"
                      )}
                      placeholder="e.g., React, Node.js, MongoDB"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dates
                    </label>
                    <input
                      type="text"
                      value={project.dates}
                      onChange={handleArrayInputChange(
                        "projects",
                        index,
                        "dates"
                      )}
                      placeholder="e.g., Jan 2024 - Mar 2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description (Bullet Points)
                    </label>
                    <textarea
                      value={project.bulletPoints}
                      onChange={handleArrayInputChange(
                        "projects",
                        index,
                        "bulletPoints"
                      )}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="• Key feature or achievement&#10;• Another important detail&#10;• Technical challenge solved"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Your Skills
              </label>
              <textarea
                value={formData.skills}
                onChange={handleInputChange("skills")}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="List your technical skills, programming languages, frameworks, tools, etc.&#10;&#10;Example:&#10;• Programming Languages: JavaScript, Python, Java&#10;• Frameworks: React, Node.js, Express&#10;• Databases: MongoDB, MySQL&#10;• Tools: Git, Docker, AWS"
              />
            </div>
          </div>
        );

      default:
        return "Unknown step";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 ">
          Welcome To <span className="font-[header]">RB</span>
        </h1>
        <p className="text-gray-600 font-[text]">
          Complete all sections to build your professional resume
        </p>
      </div>

      {/* Colorful Stepper */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Detailed Progress
        </h2>
        <ColorfulStepper steps={steps} activeStep={activeStep} />
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {activeStep === steps.length ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Resume Completed!
            </h3>
            <p className="text-gray-600 mb-6">
              Great job! Your resume information has been collected
              successfully.
            </p>
            <div className="space-x-4">
              <button
                onClick={handleReset}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Start Over
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={activeStep === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeStep === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                {activeStep === steps.length - 1 ? "Complete" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
