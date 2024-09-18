import React from "react";
import { Link } from "react-router-dom";
import englishImage from "../assets/english.png";
import logo from "../assets/logo.png";

function NavigationMenu() {
  return (
    <div className="menu-container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <nav className="menu-items">
        <Link className="menu-item" to="/">
          Home
        </Link>

        <div className="dropdown">
          <span className="menu-item">Services</span> {/* Desplegable sense enllaç directe */}
          <div className="dropdown-content">
            <Link to="/photography">Photography</Link>
            <Link to="/webfrontend">WebFrontend</Link>
            <Link to="/motiongraphic">Motion Graphic</Link>
          </div>
        </div>
        <Link className="menu-item" to="/about">
          About
        </Link>
        <img className="iconEnglish" src={englishImage} alt="English" />
      </nav>
    </div>
  );
}

export default NavigationMenu;
