import React from "react";
import Card from "../utils/Card";
import create from "../assets/feature-image/resume-creation.png";
import ats from "../assets/feature-image/ats-optimised.png";
import custom from "../assets/feature-image/easy-custom.png";

const Features = () => {
  const features = [
    {
      img: `${create}`,
      heading: "Efficient Resume Creation",
      detail:
        "Our streamlined process ensures you can quickly input your details and generate a polished resume without hassle. ",
    },
    {
      img: `${ats}`,
      heading: "ATS Friendly Template",
      detail:
        "Our templates are designed to pass through ATS, increasing your chances of getting noticed by recruiters and landing an interview.",
    },
    {
      img: `${custom}`,
      heading: "No Hidden Fees",
      detail:
        "Enjoy all the features of CVExpress without any cost. Our service is completely free, with no hidden fees or charges.",
    },
  ];
  return (
    <div className="w-full h-screen flex items-center flex-col">
      <h1 className="text-6xl font-extrabold text-white">
        Resume Creation Made Simple
      </h1>
      <div className="w-[80%] flex justify-evenly items-center mt-8">
        {features.map((item, index) => {
          return (
            <Card
              img={item.img}
              cardDetail={item.detail}
              cardHeading={item.heading}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
