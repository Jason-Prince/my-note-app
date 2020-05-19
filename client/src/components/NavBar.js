import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      My Note App
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto">
        <NavLink to="/note" activeClassName="active" className="nav-item">
          <a className="nav-link">Note</a>
        </NavLink>
        <NavLink to="/login" activeClassName="active" className="nav-item">
          <a className="nav-link">Login</a>
        </NavLink>
        <NavLink to="/register" activeClassName="active" className="nav-item">
          <a className="nav-link">Register</a>
        </NavLink>
        <NavLink exact to="/" activeClassName="active" className="nav-item">
          <a className="nav-link">Logout</a>
        </NavLink>
      </ul>
    </div>
  </nav>
);
