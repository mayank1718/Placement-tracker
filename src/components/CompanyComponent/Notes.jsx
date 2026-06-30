import React from "react";
import Context from "../../contextAPI/Context";

const Notes = ({ backkaro, note }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 inset-0 bg-black/80 backdrop-blur-sm">
      <div className="h-[40%] w-[50%] p-5 bg-linear-to-t from-black to-purple-900 rounded-xl text-white">
        <div className="flex justify-between items-center h-10% w-full">
          <h2 className="font-bold font-sans text-2xl">Add Comapany</h2>
          <button
            onClick={backkaro}
            className="text-red-600 bg-transparent rounded-xl border-2 px-3 py-1 border-red-600 font-sans font-bold text-2xl">
            Back
          </button>
        </div>
        <div className="mt-5">
          <h2 className="mb-4 text-2xl font-bold text-cyan-500">{note.companyName}</h2>
          <p>{note.notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;

