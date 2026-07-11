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
      <>
        <Nav setIsLoginForm={setIsLoginForm} />
        {isLoginForm && <Login setIsLoginForm={setIsLoginForm} /> }
        <BottomNavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </>
    </CompanyContextProvider>
  );
};

export default App;
