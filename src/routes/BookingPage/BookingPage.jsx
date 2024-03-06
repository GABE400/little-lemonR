import React from "react";
import BookForm from "../../components/Form/BookForm";
import Hero from "../../components/Header/Hero";

const BookingPage = () => {
  return (
    <>
      <Hero title='Reserve Your Table Now!' image='/Mario and Adrian A.jpg' />
      <BookForm />
    </>
  );
};

export default BookingPage;
