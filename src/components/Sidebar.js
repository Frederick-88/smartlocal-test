import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-smartlocal.png";

function Sidebar() {
  return (
    <div className="text-center" style={{ width: "200px", height: "100vh" }}>
      <img src={logo} className="w-75" alt="..." />

      <div className="list-group">
        <NavLink
          to="/"
          exact={true}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-comment-dots fa-lg" />
          <div>
            <small>Gists</small>
          </div>
        </NavLink>
        <NavLink
          to="/developer"
          exact={true}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-comment-dots fa-lg" />
          <div>
            <small>Developer</small>
          </div>
        </NavLink>
        <NavLink
          to="/favourite"
          exact={true}
          className="list-group-item list-group-item-action px-0 text-center"
        >
          <i className="fas fa-comment-dots fa-lg" />
          <div>
            <small>Favourite</small>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
