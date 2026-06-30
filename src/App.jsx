import React from "react";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddCompanies from "./components/DashboardComponent/AddCompanies";
import CompanyContextProvider from "./contextAPI/CompanyContextProvider";

const App = () => {
  return (
    <CompanyContextProvider>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </>
    </CompanyContextProvider>
  );
};

export default App;
