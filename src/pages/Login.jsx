import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-white font-sans bg-linear-to-t from-indigo-950 via-purple-400 to-black">
      <div className="h-[60%] w-[25%] border-2 border-white rounded-xl p-3 flex flex-col gap-4">
        <h1 className="flex justify-center mt-6 font-extrabold text-4xl bg-clip-text text-transparent bg-linear-to-r from-black to-white">
          Placment Tracker
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg">Email Address</h4>
          <input
            type="email"
            className="w-full px-3 py-2 font-bold text-xl rounded-xl outline-none bg-transparent border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg">Password</h4>
          <input
            type="password"
            className="w-full px-3 py-2 font-bold text-xl rounded-xl outline-none bg-transparent border-2 border-gray-300"
          />
        </div>
         <div className='flex flex-col gap-3'>
            <h4 className='text-lg text-shadow-black text-shadow-2xs'>Forget Password ?</h4>
            <button className="px-3 py-2 w-full font-bold rounded-xl bg-purple-900 text-xl">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Login;

