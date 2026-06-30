import React, { useContext } from "react";
import Context from "../../contextAPI/Context";

const SearchFeature = () => {
  const { search, setSearch } = useContext(Context);

  return (
    <div>
      <h2 className="text-4xl font-extrabold font-sans text-gray-700 tracking-tight">
        Companies
      </h2>
      <p className="text-xl font-semibold font-sans text-slate-500 tracking-tight">
        Manage and track all the companies you have applied to.
      </p>
      <div className="w-[50%] flex justify-between mt-4">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-[70%] px-4 py-2 border-2 border-gray-400 rounded-xl outline-none"
          type="search"
          placeholder="Search company or role..."
        />
        <select
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-[27%] px-2 py-2 border-2 border-gray-400 rounded-xl outline-none">
          <option value="" >All Status</option>
          <option value="Applied">Applied</option>
          <option value="OA Cleared">OA Cleared</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFeature;
