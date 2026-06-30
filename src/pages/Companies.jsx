import React, { useState } from "react";
import SearchFeature from "../components/CompanyComponent/SearchFeature";
import CompaniesTable from "../components/CompanyComponent/CompaniesTable";
import Notes from "../components/CompanyComponent/Notes";

const Companies = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null)


  const handleback = ()=>{
    setShowNotes(false)
  }

  return (
    <div className="lg:px-12 lg:py-5 px-4 py-3">
      {showNotes && <Notes backkaro={handleback} note={selectedCompany} />}
      <SearchFeature />
      <CompaniesTable shownote = {setShowNotes} selectCompany={setSelectedCompany} />
    </div>
  );
};

export default Companies;

