import React, { useContext } from "react";
import { RiCircleFill } from "@remixicon/react";
import Context from "../../contextAPI/Context";

const Summary = () => {
  const { company } = useContext(Context);
  const selectedCompany = company.filter(
    (data) => data.status === "Selected",
  ).length;

  const rejectedCompany = company.filter(
    (data) => data.status === "Rejected",
  ).length;

  const appliedCompany = company.filter(
    (data) => data.status === "Applied",
  ).length;

  const oaClearedCompany = company.filter(
    (data) => data.status === "OA Cleared",
  ).length;

  const interviewedCompany = company.filter(
    (data) => data.status === "Interview",
  ).length;
 

  return (
    <div className="flex flex-col gap-5 border-2 border-cyan-700 rounded-xl px-3 py-4 lg:m-0 mt-2 mb-2 transition-all duration-300 hover:shadow-xl hover:shadow-sky-800 hover:-translate-y-1 hover:scale-102">
      <h2 className="font-bold font-sans text-2xl text-slate-200">Status Summary</h2>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold flex gap-2 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(80,198,13,1)" />{" "}
          Applied................... <span> {appliedCompany} </span>
        </h3>{" "}
        <h3 className="font-semibold flex gap-2 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(234,70,46,1)" />
          OA Cleared................ <span> {oaClearedCompany} </span>
        </h3>{" "}
        <h3 className="font-semibold flex gap-1 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(153,16,196,1)" />{" "}
          Interview................... <span> {interviewedCompany} </span>
        </h3>{" "}
        <h3 className="font-semibold flex gap-1 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(0,198,13,1)" />{" "}
          Selected................... <span> {selectedCompany} </span>
        </h3>{" "}
        <h3 className="font-semibold flex gap-1 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(234,32,16,1)" />{" "}
          Rejected................... <span> {rejectedCompany} </span>
        </h3>{" "}
        <h3 className="font-semibold flex gap-1 items-center text-xl text-slate-400 font-sans">
          <RiCircleFill size={16} color="rgba(55,32,16,1)" />{" "}
          Total................... <span> {company.length} </span>
        </h3>
      </div>
    </div>
  );
};

export default Summary;
