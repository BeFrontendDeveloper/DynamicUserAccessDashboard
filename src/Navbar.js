import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';
import myImage from './Images/Dell_Logo.svg.png';  // Import the image


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img  className="img_container" src={myImage} alt="My Image" />
      </div>
      <div className="user-info">
        <div className="user-profile">
          <div className="avatar">BS</div>
          <span className="username">Bhavya Sri</span>
          <ChevronDown className="dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;