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
    <div className="flex justify-between items-center h-20 lg:p-8 w-full bg-linear-to-br from-slate-900 via-slate-800 to-sky-950 rounded-xl border-2 border-cyan-900 hover:shadow-2xl hover:shadow-cyan-900 hover:-translate-y-0.5 transition-all duration-300">
      <div className="lg:block flex ml-3 lg:ml-1 items-center">
        <h2 className="flex gap-2 items-center text-2xl font-bold ">
          <RiBriefcase4Fill size={24} />
          Placement Tracker
        </h2>
      </div>

      <div className="lg:flex hidden lg:gap-4 gap-2 items-center justify-between ml-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-500 text-slate-200 px-4 py-2 rounded-lg flex gap-3 items-center"
              : "text-slate-400 px-4 py-2 flex gap-3 items-center"
          }>
          <RiHome4Fill size={24} />
          Dashboard
        </NavLink>
        <NavLink
          to="/companies"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-500 text-slate-200 px-4 py-2 rounded-lg flex gap-3 items-center"
              : "text-slate-400 px-4 py-2 flex gap-3 items-center"
          }>
          <RiOrganizationChart size={24} />
          Companies
        </NavLink>
      </div>
      <div className="flex lg:gap-4 gap-2 items-center">
        <button
          onClick={() => setIsLoginForm(true)}
          className="text-slate-200  hover:text-cyan-400 px-4 py-2 rounded-lg flex gap-3 items-center font-bold transition-all duration-300">
          <RiUserFill size={30} /> Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
