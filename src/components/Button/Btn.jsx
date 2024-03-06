// Btn.jsx

import React from "react";
import PropTypes from "prop-types";
import "./Btn.css"; // Import your CSS file for styling

const Btn = ({ text, color }) => {
  return (
    <button className={`rounded-button ${color}`}>
      <div className='text'>{text}</div>
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Btn;
