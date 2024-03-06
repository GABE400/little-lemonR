import React from "react";
import "./Testimonials.css"; // Create a CSS file for styling

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    image: "/profile/michael.jpg", // Replace with actual image source
    name: "Dr. Michael",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    rating: 4,
    image: "/profile/aiony-haust-3TLl_97HNJo-unsplash.jpg", // Replace with actual image source
    name: "Jane",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    rating: 5,
    image: "/profile/joseph-gonzalez.jpg", // Replace with actual image source
    name: "Joseph",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2 className='testimonials-title'>Testimonials</h2>
      <div className='testimonials-container container'>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className='testimonial-card'>
            <div className='ratings'>{testimonial.rating}/5</div>
            <div className='image-name-container'>
              <div className='image'>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className='name'>{testimonial.name}</div>
            </div>
            <div className='review'>{testimonial.review}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
