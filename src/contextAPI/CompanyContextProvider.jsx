import React, { useEffect, useState } from "react";
import Context from "./Context";

const CompanyContextProvider = ({ children }) => {
  const [company, setCompany] = useState(() => {
    const savedData = localStorage.getItem("company");
    if (savedData === undefined) return [];
    return savedData ? JSON.parse(savedData) : [];
  });

  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    companyName: "",
    role: "",
    status: "",
    applied: "",
    deadline: "",
    notes: "",
  });

  const [showForm, setShowForm] = useState(false);

  const [search, setSearch] = useState("");

  const [editCompany, setEditCompany] = useState(null);

  useEffect(() => {
    localStorage.setItem("company", JSON.stringify(company));
  }, [company]);

  return (
    <Context.Provider
      value={{
        company,
        formData,
        setFormData,
        setCompany,
        showForm,
        setShowForm,
        editCompany,
        setEditCompany,
        search,
        setSearch,
      }}>
      {children}
    </Context.Provider>
  );
};

export default CompanyContextProvider;
