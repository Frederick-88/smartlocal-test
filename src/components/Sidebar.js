import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-smartlocal.png";

function Sidebar() {
  return (
    <div
      className="text-center border-right"
      style={{ width: "200px", height: "100vh" }}
    >
      <img src={logo} style={{ width: "8rem" }} className="my-3" alt="..." />

      <div className="list-group">
        <NavLink
          to="/"
          exact={true}
          className="list-group-item list-group-item-action px-0 border-0 d-flex d-row pl-4 mb-2"
        >
          <i className="fas fa-print align-self-center" />
          <div>
            <h6 className="my-0 ml-2 font-weight-bold">Gists</h6>
          </div>
        </NavLink>

        <NavLink
          to="/developer"
          exact={true}
          className="list-group-item list-group-item-action px-0 border-0 d-flex d-row pl-4  mb-2"
        >
          <i className="fas fa-id-card" />
          <div>
            <h6 className="my-0 ml-2 font-weight-bold">Developer</h6>
          </div>
        </NavLink>

        <NavLink
          to="/profile"
          exact={true}
          className="list-group-item list-group-item-action px-0 border-0 d-flex d-row pl-4  mb-2"
        >
          <i className="fas fa-user" />
          <div>
            <h6 className="my-0 ml-2 font-weight-bold">Profile</h6>
          </div>
        </NavLink>
        <NavLink
          to="/favourite"
          exact={true}
          className="list-group-item list-group-item-action px-0 border-0 d-flex d-row pl-4"
        >
          <i className="fas fa-heart align-self-center" />
          <div>
            <h6 className="my-0 ml-2 font-weight-bold">Favourite</h6>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
