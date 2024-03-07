// Header.jsx

import React from "react";
import PropTypes from "prop-types";
import HeaderImg from "../../assets/restauranfood.jpg";
import "./Header.css";
import Btn from "../Button/Btn";

const Header = ({ title, subtitle, description }) => {
  return (
    <section id='header-section'>
      <div className='hero-section container'>
        <div className='left-section'>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
          <a href='/booking-page'>
            <Btn text='Reserve a Table' color='yellow' />
          </a>
        </div>
        <div className='right-section'>
          <img
            src={HeaderImg}
            alt='Little Lemon Restaurant'
            className='headerimg'
          />
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
