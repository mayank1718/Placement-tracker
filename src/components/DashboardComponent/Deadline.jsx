import React from "react";
import { RiCalendar2Line, RiArrowRightLine } from "@remixicon/react";
import { useContext } from "react";
import Context from "../../contextAPI/Context";

const Deadline = () => {
  const { company } = useContext(Context);

  return (
    <div className="flex flex-col gap-5 border-2 border-gray-300 h-85 rounded-xl lg:w-[25%] overflow-auto">
      <div className=" border-b-2 border-gray-300">
        <h2 className="font-bold font-sans px-3 py-4 text-xl flex justify-between">
          Upcoming Deadlines{" "}
          <span>
            <RiCalendar2Line size={18} color="rgba(95,166,227,1)" />
          </span>
        </h2>
      </div>
      <div className="px-3 py-1 flex flex-col gap-2">
        {company.length == 0 ? (
          <p className="text-2xl text-red-400 font-bold text-center">
            No Company Added
          </p>
        ) : (
          company.map((item, index) => {
            const daysLeft = Math.ceil(
              (new Date(item.deadline) - new Date()) / (1000 * 60 * 60 * 24),
            );
            return (
              <div key={index} className="flex justify-between">
                <div>
                  <h2 className="font-bold text-xl font-sans">
                    {" "}
                    {item.companyName}{" "}
                  </h2>
                  <p className="text-lg font-semibold text-slate-400">
                    {" "}
                    {item.applied}{" "}
                  </p>
                </div>
                <div
                  className={`px-1 flex items-center py-1 rounded-lg h-fit
                  ${
                    daysLeft < 0
                      ? "bg-red-100 text-red-700"
                      : daysLeft <= 3
                        ? "bg-red-100 text-red-700"
                        : daysLeft <= 10
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                  }`}>
                  <p className="font-bold font-sans  tracking-tighter [word-spacing:-2px]">
                    {daysLeft >= 0
                      ? `${daysLeft} days left`
                      : "Dead Line Passed"}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Deadline;
