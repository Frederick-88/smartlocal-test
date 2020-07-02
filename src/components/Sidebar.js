import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-smartlocal.png";

function Sidebar() {
  return (
    <div className="text-center" style={{ width: "200px", height: "100vh" }}>
      <img src={logo} className="w-75" alt="..." />
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          Left
        </button>
        <button type="button" class="btn btn-secondary">
          Middle
        </button>
        <button type="button" class="btn btn-secondary">
          Right
        </button>
      </div>
      <h3>SIDE BAR</h3>
    </div>
  );
}

export default Sidebar;
