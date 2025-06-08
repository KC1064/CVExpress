const nodemailer = require('nodemailer');

const sendMail = async (to, username) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const subject = `Welcome to ResumeBlitz, ${username}! 🚀 Build Your Resume Smarter with AI`;

  const html = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <h1 style="color: #007bff; text-align: center;">Welcome to ResumeBlitz! 💼✨</h1>
        <p style="font-size: 16px;">Hi <strong>${username}</strong>,</p>
        <p style="font-size: 16px;">
          We're excited to have you join <strong>ResumeBlitz</strong> — your AI-powered assistant for building, analyzing, and enhancing standout resumes that get noticed.
        </p>
        <p style="font-size: 16px;">
          Our smart platform tailors your resume to match your dream roles, provides instant feedback, and helps you showcase your skills effectively. Whether you're a student, a professional, or switching careers — we've got your back!
        </p>
        <p style="font-size: 16px;">
          🔍 Ready to boost your job hunt? Start creating your resume in minutes.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://yourwebsite.com/dashboard" style="background-color: #007bff; color: #fff; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold;">
            Launch Resume Builder
          </a>
        </div>
        <p style="font-size: 14px; color: #666;">If you didn’t sign up for ResumeBlitz, feel free to ignore this message.</p>
        <hr style="margin-top: 40px; border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 12px; color: #999;">© 2025 ResumeBlitz. All rights reserved.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"ResumeBlitz" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  };

  await transport.sendMail(mailOptions);
};

module.exports = sendMail;
