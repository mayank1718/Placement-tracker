import React from "react";
import { createPortal } from "react-dom";

const Login = ({ setIsLoginForm }) => {
  return createPortal(
    <div className="w-full h-screen fixed top-0 bg-linear-to-br from-slate-900 via-slate-800 to-sky-950 p-3 flex justify-center items-center">
      <div className=" h-screen lg:h-[60%] w-full lg:w-[40%] bg-slate-900/40 backdrop-blur-xl border border-white/10 text-white rounded-2xl shadow-xl shadow-sky-500/10 p-6">
        <div className="flex justify-between p-3 items-center mb-4">
          <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-linear-to-r from-slate-500 to-white">
            Placment Tracker
          </h1>
          <button onClick={()=>setIsLoginForm(false)} className="px-4 py-2 bg-slate-600 text-red-200 rounded-2xl hover:bg-slate-700 hover:text-red-600 font-bold">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-sans">Email Address:</h4>
            <input
              type="email"
              className="w-full px-3 py-2 font-bold text-xl rounded-xl outline-none bg-white/10 backdrop-blur-md focus:shadow-lg transition-all duration-300 ease-in-out focus:border-sky-400 focus:ring-4 focus:ring-sky-500/20 focus:shadow-sky-400/20 hover:border-sky-400/60 hover:bg-white/15 focus:scale-102"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">Password</h4>
            <input
              type="password"
              className="w-full px-3 py-2 font-bold text-xl rounded-xl outline-none bg-white/10 backdrop-blur-md focus:shadow-lg transition-all duration-300 ease-in-out focus:border-sky-400 focus:ring-4 focus:ring-sky-500/20 focus:shadow-sky-400/20 hover:border-sky-400/60 hover:bg-white/15 focus:scale-102"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg text-shadow-black text-shadow-2xs">
              Forget Password ?
            </h4>
            <button className="px-3 py-2 w-full font-bold rounded-xl bg-slate-900 hover:bg-slate-600 text-xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("model-root"),
  );
};
export default Login;
