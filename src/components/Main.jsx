import React from "react";
import Products from "./Products/Products";
import Testimonials from "./ Testimonials/ Testimonials";
import LittleSection from "./LittleSection/LittleSection";

const Main = () => {
  return (
    <>
      <main>
        <Products />
        <Testimonials />
        <LittleSection
          title='Little Lemon'
          subtitle='Chicago'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          image1='/1.jpg'
          image2='/2.jpg'
        />
      </main>
    </>
  );
};

export default Main;
