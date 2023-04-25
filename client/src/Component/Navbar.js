import React from "react";
import "./Navbar.css";
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/2">
                2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/3">
                3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/4">
                4
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/5">
                5
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
