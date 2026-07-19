import React, { useState } from "react";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AddCompanies from "./components/DashboardComponent/AddCompanies";
import CompanyContextProvider from "./contextAPI/CompanyContextProvider";
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  const [isLoginForm, setIsLoginForm] = useState(false)
  return (
    <CompanyContextProvider>
      <div className="px-2 py-3  bg-linear-to-br from-slate-900 via-slate-800 to-sky-950 text-slate-400">
        <Nav setIsLoginForm={setIsLoginForm} />
        {isLoginForm && <Login setIsLoginForm={setIsLoginForm} />}
        <BottomNavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </div>
    </CompanyContextProvider>
  );
};

export default App;
