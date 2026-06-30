import React from "react";
import {
  RiBriefcase4Fill,
  RiHome4Fill,
  RiOrganizationChart,
  RiMoonLine,
  RiUserFill,
} from "@remixicon/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-20 lg:p-8 w-full border-black border-b-2 bg-emerald-600">
      <div>
        <h2 className="flex gap-2 items-center text-2xl font-bold">
          <RiBriefcase4Fill size={24} color="rgba(21,18,18,1)" />
         <span className="hidden sm:block"> Placement Tracker </span>
        </h2>
      </div>
      <div className="flex lg:gap-4 gap-2 items-center ml-4">
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
        <div className="cursor-pointer">
          <h3 className="hidden sm:block">
            <RiMoonLine size={24} />
          </h3>
        </div>
        <div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-emerald-950 text-white px-4 py-2 rounded-lg flex gap-3 items-center"
                : "text-gray-800 px-4 py-2 flex gap-3 items-center"
            }>
            <RiUserFill className="lg:block md:block hidden" size={30} /> Ayush Dubey
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;

