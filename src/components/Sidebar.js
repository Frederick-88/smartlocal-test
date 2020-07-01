import React from "react";
import logo from "../assets/logo-smartlocal.png";

function Sidebar() {
  return (
    <div
      className="text-center border-right"
      style={{ width: "200px", height: "100vh" }}
    >
      <img src={logo} className="w-75" alt="..." />
      <h3>SIDE BAR</h3>
    </div>
  );
}

export default Sidebar;
