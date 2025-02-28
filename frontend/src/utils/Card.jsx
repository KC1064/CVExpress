import React from "react";

const Card = ({ img, cardHeading, cardDetail }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(4px) saturate(100%)",
        WebkitBackdropFilter: "blur(4px) saturate(100%)",
        border: "2px solid white",
      }}
      className="text-white w-[350px] h-[450px] p-3 border-2 rounded-2xl flex flex-col gap-8"
    >
      <div className="flex justify-center items-center">
        <img src={`${img}`} alt="" srcset="" className="h-60 w-auto" />
      </div>
      <div className="flex items-start flex-col justify-center">
        <p className="text-2xl">{cardHeading}</p>
        <p className="text-lg tracking-tighter">{cardDetail}</p>
      </div>
    </div>
  );
};

export default Card;
