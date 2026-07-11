import { RiHome4Fill, RiOrganizationChart, RiUserFill } from "@remixicon/react";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../contextAPI/Context";

const BottomNavBar = () => {
  const { setShowForm } = useContext(Context);

  return (
    <div className="w-full fixed block lg:hidden bottom-2 p-2">
      <nav className="h-25 rounded-2xl bg-emerald-600 flex justify-around items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-950 h-10 text-white px-2 py-2 rounded-lg flex gap-3 items-center"
              : "text-gray-800 h-10 px-2 py-2 flex gap-3 items-center"
          }>
          <RiHome4Fill size={24} />
          Dashboard
        </NavLink>

        <button
          onClick={() => setShowForm(true)}
          className="p-4 rounded-full bg-emerald-300 text-4xl text-slate-100">
          +
        </button>

        <NavLink
          to="/companies"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-950 h-10 text-white px-2 py-2 rounded-lg flex gap-3 items-center"
              : "text-gray-800 px-2 h-10 py-2 flex gap-3 items-center"
          }>
          <RiOrganizationChart size={24} />
          Companies
        </NavLink>
      </nav>
    </div>
  );
};

export default BottomNavBar;
