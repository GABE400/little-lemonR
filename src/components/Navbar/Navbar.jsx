// Navbar.jsx

import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FiLogIn } from "react-icons/fi";
import { MdFastfood } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className={`navbar-links ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            {" "}
            <a href='/'>
              <FaHome /> Home
            </a>
          </li>
          <li>
            {" "}
            <a href='/about'>
              <FaUser /> About
            </a>
          </li>
          <li>
            {" "}
            <a href='/services'>
              <MdRestaurantMenu /> Menu
            </a>
          </li>
          <li>
            {" "}
            <a href='/booking'>
              <SlCalender /> Reservations
            </a>
          </li>
          <li>
            {" "}
            <a href='/contact'>
              <MdFastfood /> Order Online
            </a>
          </li>
          <li>
            {" "}
            <a href='/contact'>
              <FiLogIn /> Login
            </a>
          </li>
        </ul>
      </div>
      <div className='navbar-toggle' onClick={toggleNav}>
        {isNavOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
