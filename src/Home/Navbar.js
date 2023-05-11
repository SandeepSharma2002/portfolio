import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const [ToggleClass, setToggleClass] = useState(false);
  const toggle = () => {
    ToggleClass ? setToggleClass(false) : setToggleClass(true);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand-and-toggler">
          <Link to="/portfolio" className="navbar-brand">
            Sandeep
          </Link>
          <button 
            type="button"
            onClick={toggle}
            className="navbar-toggler"
            id="navbar-toggler">
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
        </div>
        <div className={ToggleClass ? "showNav" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/"  className="nav-link ">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"  className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume"  className="nav-link">
                Resume
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/services"  className="nav-link">
                Service
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/skills"  className="nav-link">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects"  className="nav-link">
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/experience"  className="nav-link">
                Experience
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/contact"  className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
