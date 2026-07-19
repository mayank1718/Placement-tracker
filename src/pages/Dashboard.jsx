import React from "react";
import HeroSection from "../components/DashboardComponent/HeroSection";
import StatsCard from "../components/DashboardComponent/StatsCard";
import {
  RiBriefcase4Fill,
  RiFileTextLine,
  RiCheckboxFill,
  RiCloseCircleFill,
  RiGroupFill,
  RiSendPlaneFill,
} from "@remixicon/react";
import ProgressBar from "../components/DashboardComponent/ProgressBar";
import Summary from "../components/DashboardComponent/Summary";
import Deadline from "../components/DashboardComponent/Deadline";
import AddCompanies from "../components/DashboardComponent/AddCompanies";
import { useContext } from "react";
import Context from "../contextAPI/Context";

const Dashboard = () => {
  const { setShowForm, showForm, company } = useContext(Context);

  const handleAddCompany = () => {
    setShowForm(true);
  };
 
  return (
    <div className="lg:flex-row flex-colX">
      {showForm && <AddCompanies />}
      <HeroSection formdikhao={handleAddCompany} />
      <div className="flex lg:justify-between justify-center gap-3 w-full flex-wrap lg:px-12 px-2 lg:mt-9 mt-4">
        <StatsCard
          value={company.length}
          title="Total Compaines"
          color="bg-slate-300"
          heading="All companies you added"
          textColor="text-slate-700"
          borderColor="border-slate-500"
          titleColor="text-slate-600"
          logo={<RiBriefcase4Fill />}
          logobg="bg-slate-400"
        />
        <StatsCard
          value={company.filter((item) => item.status === "Applied").length}
          title="Applied"
          color="bg-green-300"
          heading="50% of total"
          textColor="text-green-700"
          borderColor="border-green-500"
          titleColor="text-green-600"
          logo={<RiSendPlaneFill size={24} color="rgba(80,98,13,1)" />}
          logobg="bg-green-400"
        />
        <StatsCard
          value={company.filter((item) => item.status === "OA Cleared").length}
          title="OA cleared"
          color="bg-orange-300"
          heading="25% of total"
          textColor="text-orange-700"
          borderColor="border-orange-500"
          titleColor="text-orange-600"
          logo={<RiFileTextLine size={24} color="rgba(100,18,45,1)" />}
          logobg="bg-orange-400"
        />
        <StatsCard
          value={company.filter((item) => item.status === "Interview").length}
          title="Interview"
          color="bg-purple-300"
          heading="16% of total"
          textColor="text-purple-700"
          borderColor="border-purple-500"
          titleColor="text-purple-600"
          logo={<RiGroupFill size={24} color="rgba(153,20,196,1)" />}
          logobg="bg-purple-400"
        />
        <StatsCard
          value={company.filter((item) => item.status === "Selected").length}
          title="Selected"
          color="bg-green-300"
          heading="4% of total"
          textColor="text-green-700"
          borderColor="border-green-500"
          titleColor="text-green-600"
          logo={<RiCheckboxFill size={24} color="rgba(4,98,81,1)" />}
          logobg="bg-green-400"
        />
        <StatsCard
          value={company.filter((item) => item.status === "Rejected").length}
          title="Rejected"
          color="bg-red-300"
          heading="4% of total"
          textColor="text-red-700"
          borderColor="border-red-500"
          titleColor="text-red-600"
          logo={<RiCloseCircleFill size={24} color="rgba(155,11,34,1)" />}
          logobg="bg-red-400"
        />
      </div>
      <div className="lg:flex lg:justify-between gap-2 lg:p-12 py-5 px-2">
        <ProgressBar />
        <Summary />
        <Deadline />
      </div>
    </div>
  );
};

export default Dashboard;
