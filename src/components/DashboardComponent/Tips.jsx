import React from "react";
import { RiLightbulbLine, RiCheckboxLine } from "@remixicon/react";

const Tips = () => {
  return (
    <div className="border-2 border-gray-300 bg-blue-50 p-4 flex justify-between rounded-xl items-center">
      <div className="flex flex-col gap-4">
        <h2 className="flex gap-1.5 items-center font-bold text-xl tracking-tighter [word-spacing:-2px] text-gray-800">
          {" "}
          <span>
            <RiLightbulbLine size={24} />
          </span>{" "}
          Quick Tips
        </h2>
        <div className="flex gap-2 flex-col">
          <h2 className="flex gap-1.5 items-center font-semibold font-sans text-lg text-slate-400 tracking-tighter [word-spacing:-2px]">
            <span>
              <RiCheckboxLine size={24} color="rgba(70,146,221,1)" />
            </span>
            Keep your application status updated regularly.
          </h2>
          <h2 className="flex gap-1.5 items-center font-semibold font-sans text-lg text-slate-400 tracking-tighter [word-spacing:-2px]">
            <span>
              <RiCheckboxLine size={24} color="rgba(70,146,221,1)" />
            </span>
            Add notes to remainder important details.
          </h2>
        </div>
      </div>
      <div>
        <img
          className="w-30 object-cover rounded-xl"
          src="https://tse1.mm.bing.net/th/id/OIP.925YRQPxqkXDmcAN_ZUDtQHaHa?pid=Api&P=0&h=180"
          alt=""
        />
      </div>
    </div>
  );
};

export default Tips;
