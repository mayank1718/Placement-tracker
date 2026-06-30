import React, { useContext } from "react";
import Context from "../../contextAPI/Context";

const AddCompanies = () => {
  const {
    formData,
    setFormData,
    setCompany,
    company,
    setShowForm,
    editCompany,
    setEditCompany,
  } = useContext(Context);

  let formHandler = (e) => {
    e.preventDefault();

    if (editCompany) {
      const updateData = company.map((item) =>
        item.id === editCompany ? { ...item, ...formData } : item,
      );
      setCompany(updateData);
      setEditCompany(null);
    } else {
      let copy = { ...formData };
      setCompany([...company, copy]);
    }
    
    setShowForm(false);
    setFormData({
      companyName: "",
      role: "",
      status: "",
      applied: "",
      deadline: "",
      notes: "",
      id: null,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const backFunction = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 inset-0 bg-black/80 backdrop-blur-sm">
      <div className="lg:w-[40%] w-[70%] min-h-[60%] border-2 text-white px-4 py-5 bg-linear-to-b from-purple-900 to-gray-950 border-slate-800 rounded-xl">
        <div className="flex justify-between items-center h-10% w-full">
          <h2 className="font-bold font-sans text-2xl">Add Comapany</h2>
          <button
            onClick={backFunction}
            className="text-red-600 bg-transparent rounded-xl border-2 px-3 py-1 border-red-600 font-sans font-bold text-2xl">
            Back
          </button>
        </div>
        <div className="mt-4 w-full">
          <form
            onSubmit={(e) => {
              formHandler(e);
            }}
            className="flex justify-between flex-wrap gap-3">
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Company Name</h3>
              <input
                required
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none"
                type="text"
                placeholder="Enter Company name"
              />
            </div>
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Role</h3>
              <input
                required
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none"
                type="text"
                placeholder="Enter Role"
              />
            </div>
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Status</h3>
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none">
                <option value="" disabled selected>
                  Select Status
                </option>
                <option className="text-black " value="Applied">
                  Applied
                </option>
                <option className="text-black " value="OA Cleared">
                  OA Cleared
                </option>
                <option className="text-black " value="Interview">
                  Interview
                </option>
                <option className="text-black " value="Selected">
                  Selected
                </option>
                <option className="text-black" value="Rejected">
                  Rejected
                </option>
              </select>
            </div>
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Applied Date</h3>
              <input
                name="applied"
                value={formData.applied}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none"
                type="date"
              />
            </div>
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Deadline</h3>
              <input
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none"
                type="date"
              />
            </div>
            <div className="font-sans flex flex-col gap-1 lg:w-[47%] w-full">
              <h3 className="font-bold text-xl">Notes (Optional)</h3>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="border-2 tracking-tighter [word-spacing:-3px] border-gray-500 px-2 py-1 rounded-lg w-full text-xl outline-none"
                placeholder="Add any notes..."></textarea>
            </div>
            <div className="flex gap-4 items-center mt-3">
              <button
                onClick={backFunction}
                className="bg-transparent text-xl font-semibold px-2 py-1.5 border-2 text-gray-700 border-gray-400 rounded-lg">
                Cancel
              </button>
              <button
                type="submit"
                className="text-xl font-semibold px-2 py-1.5 border-2 border-blue-400 bg-blue-400 text-white rounded-lg">
                Save Company
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompanies;
