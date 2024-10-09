import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <Link to="/add">
          <li><img src="./add.png" alt="Add" /><span>Add Item</span></li>
        </Link>
    <Link to="/list"> <li><img src="./list.png" alt="List" /><span>List Item</span></li></Link>
        <li><img src="./Orders.png" alt="Orders" /><span>Orders</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;