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
        }} className="px-3 py-2 text-xl cursor-pointer bg-slate-700 rounded-xl text-slate-200 hover:scale-102 hover:shadow-xl hover:shadow-sky-500 duration-300 transition-all hover:text-sky-100 hover:bg-sky-700">
          + Add Company
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
