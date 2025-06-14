import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
} from "@mui/material";

const steps = [
  "Personal Info",
  "Education",
  "Experience",
  "Projects",
  "Skills",
];

export default function OnboardingPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [formData, setFormData] = React.useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      github: "",
      linkedIn: "",
      location: "",
    },
    experience: {
      position: "",
      companyName: "",
      responsibilities: "",
      years: "",
    },
    skills: "",
  });

  const [educations, setEducations] = React.useState([
    {
      collegeName: "",
      degreeName: "",
      coursework: "",
      date: "",
      location: "",
      score: "",
    },
  ]);

  const [projects, setProjects] = React.useState([
    { name: "", skills: "", dates: "", bulletPoints: "" },
  ]);

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0: // Personal Info
        return (
          <div className="flex-col gap-3 flex items-center">
            <TextField
              className="w-[91%]"
              label="Full Name"
              value={formData.personalInfo.fullName}
              onChange={(e) =>
                handleChange("personalInfo", "fullName", e.target.value)
              }
            />

            {/* GitHub and LinkedIn - same row */}
            <div className="flex gap-2 w-full justify-center">
              <TextField
                className="w-[45%]"
                label="GitHub"
                value={formData.personalInfo.github}
                onChange={(e) =>
                  handleChange("personalInfo", "github", e.target.value)
                }
              />

              <TextField
                className="w-[45%]"
                label="LinkedIn"
                value={formData.personalInfo.linkedIn}
                onChange={(e) =>
                  handleChange("personalInfo", "linkedIn", e.target.value)
                }
              />
            </div>

            {/* Email and Phone - same row */}
            <div className="flex gap-2 w-full justify-center">
              <TextField
                className="w-[45%]"
                label="Email"
                value={formData.personalInfo.email}
                onChange={(e) =>
                  handleChange("personalInfo", "email", e.target.value)
                }
              />
              <TextField
                className="w-[45%]"
                label="Phone Number"
                value={formData.personalInfo.phone}
                onChange={(e) =>
                  handleChange("personalInfo", "phone", e.target.value)
                }
              />
            </div>

            {/* Location - full row */}
            <TextField
              className="w-[91%]"
              label="Location"
              value={formData.personalInfo.location}
              onChange={(e) =>
                handleChange("personalInfo", "location", e.target.value)
              }
            />
          </div>
        );

      case 1: // Education
        return (
          <>
            {educations.map((edu, idx) => (
              <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
                {Object.entries(edu).map(([field, value]) => (
                  <Grid item xs={12} sm={6} key={field}>
                    <TextField
                      fullWidth
                      label={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={value}
                      onChange={(e) => {
                        const updated = [...educations];
                        updated[idx][field] = e.target.value;
                        setEducations(updated);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
            <Button
              variant="outlined"
              onClick={() =>
                setEducations([
                  ...educations,
                  {
                    collegeName: "",
                    degreeName: "",
                    coursework: "",
                    date: "",
                    location: "",
                    score: "",
                  },
                ])
              }
            >
              + Add More
            </Button>
          </>
        );

      case 2: // Experience
        return (
          <Grid container spacing={2}>
            {Object.entries(formData.experience).map(([field, value]) => (
              <Grid item xs={12} sm={6} key={field}>
                <TextField
                  fullWidth
                  label={
                    field.charAt(0).toUpperCase() +
                    field.replace(/([A-Z])/g, " $1")
                  }
                  value={value}
                  onChange={(e) =>
                    handleChange("experience", field, e.target.value)
                  }
                />
              </Grid>
            ))}
          </Grid>
        );

      case 3: // Projects
        return (
          <>
            {projects.map((proj, idx) => (
              <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
                {Object.entries(proj).map(([field, value]) => (
                  <Grid item xs={12} sm={6} key={field}>
                    <TextField
                      fullWidth
                      label={
                        field.charAt(0).toUpperCase() +
                        field.replace(/([A-Z])/g, " $1")
                      }
                      value={value}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[idx][field] = e.target.value;
                        setProjects(updated);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
            <Button
              variant="outlined"
              onClick={() =>
                setProjects([
                  ...projects,
                  { name: "", skills: "", dates: "", bulletPoints: "" },
                ])
              }
            >
              + Add More
            </Button>
          </>
        );

      case 4: // Skills
        return (
          <TextField
            fullWidth
            multiline
            label="Add your skills (comma-separated)"
            value={formData.skills}
            onChange={(e) => handleChange("skills", "skills", e.target.value)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="text-3xl font-bold mb-6" style={{ fontFamily: "text" }}>
        <span style={{ fontFamily: "header" }}>RB</span> Onboarding
      </div>
      <div className="bg-white shadow-md p-6 rounded-md w-full max-w-4xl">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed — you're finished!
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {renderStepContent(activeStep)}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </div>
    </div>
  );
}
