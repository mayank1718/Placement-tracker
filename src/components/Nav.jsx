import React from "react";
import {
  RiBriefcase4Fill,
  RiHome4Fill,
  RiOrganizationChart,
  RiMoonLine,
  RiUserFill,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Nav = ({ setIsLoginForm }) => {
  return (
    <div className="flex justify-between items-center h-20 lg:p-8 w-full border-black border-b-2 bg-emerald-600">
      <div className="lg:block flex ml-3 lg:ml-1 items-center">
        <h2 className="flex gap-2 items-center text-2xl font-bold ">
          <RiBriefcase4Fill size={24} color="rgba(21,18,18,1)" />
          Placement Tracker
        </h2>
      </div>

      <div className="lg:flex hidden lg:gap-4 gap-2 items-center justify-between ml-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-950 text-white px-4 py-2 rounded-lg flex gap-3 items-center"
              : "text-gray-800 px-4 py-2 flex gap-3 items-center"
          }>
          <RiHome4Fill size={24} />
          Dashboard
        </NavLink>
        <NavLink
          to="/companies"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-950 text-white px-4 py-2 rounded-lg flex gap-3 items-center"
              : "text-gray-800 px-4 py-2 flex gap-3 items-center"
          }>
          <RiOrganizationChart size={24} />
          Companies
        </NavLink>
      </div>
      <div className="flex lg:gap-4 gap-2 items-center">
        <button onClick={()=>setIsLoginForm(true)} className= "text-slate-700 bg-emerald-600 hover:bg-emerald-800 hover:text-slate-200 px-4 py-2 rounded-lg flex gap-3 items-center font-bold transition-all duration-300 ">
          <RiUserFill size={30} /> Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
