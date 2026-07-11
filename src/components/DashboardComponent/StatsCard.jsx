import React from "react";

const StatsCard = ({
  title,
  value,
  color,
  heading,
  textColor,
  titleColor,
  borderColor,
  logo,
  logobg,
}) => {
  return (
    <div
      className={`flex items-center gap-5 lg:gap-2 p-4 rounded-xl md:55 lg:w-55 w-full ${color} border-2 ${borderColor}`}>
      <div> <h3 className={`rounded-full p-3 ${logobg} `}>{logo}</h3> </div>
      <div className="flex flex-col gap-3 ">
        <h3 className={`text-sm font-semibold ${titleColor}`}>{title}</h3>
        <h2 className="text-3xl font-bold">{value}</h2>
        <p className={`text-sm font-semibold ${textColor}`}>{heading}</p>
      </div>
    </div>
  );
};

export default StatsCard;
