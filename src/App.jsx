import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addfood from "./Pages/Addfood/Addfood";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/add" element={<Addfood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;