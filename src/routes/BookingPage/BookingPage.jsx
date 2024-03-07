import BookForm from "../../components/Form/BookForm";
import Hero from "../../components/Header/Hero";

const BookingPage = () => {
  const availableTimes = ["10:00 AM", "12:00 PM", "3:00 PM"];

  return (
    <>
      <Hero title='Reserve Your Table Now!' image='/Mario and Adrian A.jpg' />
      <div className='container'>
        <BookForm availableTimes={availableTimes} />
      </div>
    </>
  );
};

export default BookingPage;
