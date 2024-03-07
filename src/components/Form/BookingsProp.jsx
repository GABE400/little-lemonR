import BookForm from "./BookForm";

const BookingsProp = () => {
  return (
    <>
      <BookForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        SubmitForm={props.SubmitForm}
      />
    </>
  );
};

export default BookingsProp;
