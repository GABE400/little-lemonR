import React from "react";
import "./Hero.css"; // Create a CSS file for styling

const Hero = ({ title, image }) => {
  return (
    <section id='hero'>
      <div className='hero-section-container'>
        <h1 className='hero-title'>{title}</h1>
        <img src={image} alt='Hero Image' className='hero-image' />
      </div>
    </section>
  );
};

export default Hero;
