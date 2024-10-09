import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addfood from "./Pages/Addfood/Addfood";
import Listfood from "./Pages/Listfood/Listfood";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/add" element={<Addfood />} />
            <Route path="/list" element={<Listfood/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;