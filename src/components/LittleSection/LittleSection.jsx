import React from "react";
import "./LittleSection.css";
import Chef from "../../assets/restaurant chef B.jpg";
import MA from "../../assets/Mario and Adrian A.jpg";

const LittleSection = ({ title, subtitle, description, image1, image2 }) => {
  return (
    <section id='little-section'>
      <div className='little-section-container '>
        {/* Left Column */}
        <div className='left-column'>
          <h2 className='section-title'>{title}</h2>
          <h3 className='section-subtitle'>{subtitle}</h3>
          <p className='section-description'>{description}</p>
        </div>

        {/* Right Column */}
        <div className='right-column'>
          <img src={image1} alt='Image 1' className='centered-image' />
          <img src={image2} alt='Image 2' className='top-right-image' />
        </div>
      </div>
    </section>
  );
};

export default LittleSection;
