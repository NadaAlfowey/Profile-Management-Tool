import React, { useState } from "react";
import './navbar.css'
import logo from './pmtLogo.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
  const [menuToggle, setIsMenuOpen] = useState(false);

  const toggleMenu=()=>{
    setIsMenuOpen(!menuToggle);
  };

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
          <input type="checkbox" id="toggle-box" checked={menuToggle} onChange={toggleMenu}/>
          <label for="toggle-box" className="menu-toggle">
            <span></span>
          </label>
          {/* Navbar options  */}
          <div className="navoptions">
            <a><Link to='/' onClick={toggleMenu}>Home</Link></a>
            <a><Link to='/table' onClick={toggleMenu}>Table</Link></a>
            <a><Link to='/aboutus' onClick={toggleMenu}>About Us</Link></a>
            <a><Link to='/logout' onClick={toggleMenu}>Logout</Link></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
