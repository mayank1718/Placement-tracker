import React from "react";

const HeroSection = ({formdikhao}) => {

  return (
    <div className="flex justify-between items-center lg:px-10 px-2 m-2">
      <div>
        <h2 className="font-bold text-2xl lg:text-4xl font-sans">Dashboard👋</h2>
        <h4 className="text-sm">
          Track your placement journey and stay organized
        </h4>
      </div>
      <div  className="hidden lg:block">
        <button onClick={()=>{
          formdikhao()
        }} className="px-3 py-2 text-xl cursor-pointer bg-emerald-600 rounded-xl text-white">
          + Add Company
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
