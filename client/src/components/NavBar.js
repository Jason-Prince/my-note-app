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
          <div className="nav-link">Make Note</div>
        </NavLink>
        <NavLink to="/notes" activeClassName="active" className="nav-item">
          <div className="nav-link">View Notes</div>
        </NavLink>
        <NavLink to="/login" activeClassName="active" className="nav-item">
          <div className="nav-link">Login</div>
        </NavLink>
        <NavLink to="/register" activeClassName="active" className="nav-item">
          <div className="nav-link">Register</div>
        </NavLink>
        <NavLink exact to="/" activeClassName="active" className="nav-item">
          <div className="nav-link">Logout</div>
        </NavLink>
      </ul>
    </div>
  </nav>
);
