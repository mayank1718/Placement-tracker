import React, { useContext, useEffect, useState } from "react";
import {
  RiFileTextLine,
  RiFileEditLine,
  RiDeleteBinLine,
} from "@remixicon/react";
import Context from "../../contextAPI/Context";
import AddCompanies from "../DashboardComponent/AddCompanies";

const CompaniesTable = ({ selectCompany, shownote }) => {
  const {
    company,
    search,
    setCompany,
    setShowForm,
    showForm,
    setFormData,
    setEditCompany,
  } = useContext(Context);

  const [decounceSearch, setDecounceSearch] = useState("");

  const handleDelete = (idx) => {
    let copy = [...company];
    copy.splice(idx, 1);
    setCompany(copy);
  };

  const handleEdit = (item) => {
    setEditCompany(item.id);
    setShowForm(true);
    setFormData(item);
  };

  const handleBack = () => {
    setShowForm(false);
    setEditCompany(null);
  };

  const handleNote = (idx) => {
    selectCompany(company[idx]);
    shownote(true);
  };

  const filterCompany = company.filter(
    (data) =>
      data.companyName.toLowerCase().startsWith(decounceSearch.toLowerCase()) ||
      data.status.toLowerCase().startsWith(decounceSearch.toLowerCase()) ||
      data.role.toLowerCase().startsWith(decounceSearch.toLowerCase()),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDecounceSearch(search);
    }, 600);
    return () => timer;
  });

  return (
    <>
      {showForm && <AddCompanies back={handleBack} />}
      <div className="min-h-130 w-full border-2 border-slate-600 mt-3 rounded-xl overflow-hidden">
        <table className="w-full bg-white rounded-xs overflow-hidden">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Companies
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Role
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Status
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Applied On
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Deadline
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Notes
              </th>
              <th className="p-4 text-center align-middle text-2xl font-sans font-bold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {company.length == 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-red-700 text-center font-semibold font-serif text-3xl lg:py-10 p-3">
                  {" "}
                  Your placement tracker is empty, Click "Add Company" to get
                  started{" "}
                </td>
              </tr>
            ) : filterCompany.length == 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-red-700 text-center font-semibold font-serif text-3xl lg:py-10 p-3">
                  {" "}
                  Search Not Found{" "}
                </td>
              </tr>
            ) : (
              filterCompany.map((companies, index) => {
                return (
                  <tr key={index} className="border-b-2 border-gray-400">
                    <td className="p-4 text-center align-middle text-2xl font-sans font-bold text-slate-500">
                      {companies.companyName}
                    </td>
                    <td className="p-4 text-xl font-semibold font-serif text-slate-500 text-center align-middle">
                      {companies.role}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center">
                        {" "}
                        <span
                          className={`px-3 py-1 rounded-full font-bold ${
                            companies.status === "Applied"
                              ? "bg-green-100 text-green-700"
                              : companies.status === "Interview"
                                ? "bg-purple-200 text-purple-700"
                                : companies.status === "Selected"
                                  ? "bg-green-100 text-green-700"
                                  : companies.status === "Rejected"
                                    ? "bg-red-100 text-red-700"
                                    : companies.status === "OA Cleared"
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-slate-100 text-slate-700"
                          }`}>
                          {companies.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-xl text-center align-middle font-semibold font-serif text-slate-500">
                      {companies.applied}
                    </td>
                    <td className="p-4 text-xl  text-center align-middle font-semibold font-serif text-slate-500">
                      {companies.deadline}
                    </td>
                    <td className=" p-4">
                      <div className="cursor-pointer flex items-center justify-center">
                        <RiFileTextLine
                          onClick={() => {
                            handleNote(index);
                          }}
                          size={24}
                          color="rgba(45,156,255,1)"
                        />
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="cursor-pointer flex items-center justify-center gap-4">
                        <RiFileEditLine
                          onClick={() => handleEdit(companies)}
                          size={24}
                          color="rgba(70,146,221,1)"
                        />
                        <RiDeleteBinLine
                          onClick={() => {
                            handleDelete(index);
                          }}
                          size={24}
                          color="rgba(209,9,9,1)"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompaniesTable;
