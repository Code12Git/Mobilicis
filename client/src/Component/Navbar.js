import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Mobilicis
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto flex align-items-center gap-2 ">
            <li class="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "red" }}
                class="nav-link active "
                aria-current="page"
                to="/users1"
              >
                1
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "red" }}
                class="nav-link active  "
                to="/users2"
              >
                2
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "red" }}
                class="nav-link active  "
                to="/users3"
              >
                3
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "red" }}
                class="nav-link active  "
                to="/users4"
              >
                4
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                style={{ textDecoration: "none", color: "red" }}
                class="nav-link active  "
                to="/users5"
              >
                5
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
