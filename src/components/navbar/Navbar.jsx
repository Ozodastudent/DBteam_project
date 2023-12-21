import React from 'react';
import './navbar.css';
import loginImg from "../../assets/images/user.png";
import homeImg from "../../assets/images/home-icon.png";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/listings" className="nav-link">Listings</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
      </ul>
      <div>
        <button className="login-register-btn">
          <img width={20} height={19} src={loginImg} alt="icon" />
          Login/Register</button>
        <button className="add-listing-btn">
        <img width={20} height={16} src={homeImg} alt="icon" />
          Add Listing</button>
      </div>
    </nav>
  );
}

export default Navbar;
