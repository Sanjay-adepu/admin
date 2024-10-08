import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="title">
          <h1>Yumio</h1>
        </div>
        <div className="heading">
          <h2>Admin Page</h2>
        </div>
        <div className="homeicon">
          <img src="./home_49dp_5F6368_FILL0_wght400_GRAD0_opsz48.png" alt="Home" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;