import React from "react";
import './navbar.css'
import logo from './pmtLogo.jpg'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        {/* page Logo */}
        <div className="nav-items">
          <img
            src={logo}
            alt="PMT logo"
            height="40"
          />
          {/* Responsive menu Icon  */}
          <input type="checkbox" id="toggle-box" />
          <label for="toggle-box" className="menu-toggle">
            <span></span>
          </label>
          {/* Navbar options  */}
          <div className="navoptions">
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/table'>Table</Link></a>
            <a><Link to='/aboutus'>About Us</Link></a>
            <a><Link to='/logout'>Logout</Link></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
