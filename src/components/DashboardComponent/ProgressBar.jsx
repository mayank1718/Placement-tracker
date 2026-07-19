import React, { useContext } from "react";
import { RiLightbulbLine, RiCheckboxLine } from "@remixicon/react";
import Tips from "./Tips";
import Context from "../../contextAPI/Context";
const ProgressBar = () => {
  const { company } = useContext(Context);

  const completed = company.filter(
    (item) => item.status === "Selected" || item.status === "Rejected",
  ).length;

  const progress =
    company.length === 0 ? 0 : Math.round((completed / company.length) * 100);

  return (
    <div className="lg:w-[47%] w-full flex flex-col gap-5">
      <div className=" p-4 flex flex-col rounded-xl gap-3  border-2 border-cyan-700 transition-all duration-300 hover:shadow-xl hover:shadow-sky-800 hover:-translate-y-1 hover:scale-102">
        <h3 className="font-bold font-sans text-2xl">Application Progress</h3>
        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-300 h-4 overflow-hidden rounded-xl">
            <div
              className="h-full bg-blue-400"
              style={{ width: `${progress}%` }}></div>
          </div>
          <span className="font-bold text-2xl font-serif">{progress}%</span>
        </div>
        <p className="text-lg font-semibold text-slate-400">
          {completed} of {company.length} applications completed
        </p>
      </div>
      <Tips />
    </div>
  );
};

export default ProgressBar;
