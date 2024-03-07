import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookForm.css";

const BookForm = (props) => {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!date || !times || !guests || !occasion) {
      setError("All fields are required");
      return;
    }

    try {
      // Use the provided API to submit the form
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date, times, guests, occasion }),
        }
      );

      if (response.ok) {
        // If the submission is successful, navigate to the success page
        navigate.push("/success");
      } else {
        setError("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <section id='booking'>
      <form className='booking-container' onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='book-date'>Choose Date:</label>
            <input
              id='book-date'
              value={date}
              onChange={handleChange}
              type='date'
              required
            />
          </div>

          <div>
            <label htmlFor='book-time'>Choose Time:</label>
            <select
              id='book-time'
              value={times}
              onChange={(e) => setTimes(e.target.value)}
            >
              <option value=''>Select Time:</option>
              {/* Add your available times mapping here */}
              {props.availableTimes.map((availableTime) => (
                <option key={availableTime}>{availableTime}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='guests'>Number of Guests:</label>
            <input
              id='guests'
              min='1'
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type='number'
            />
          </div>

          <div>
            <label htmlFor='book-occasion'>Occasion:</label>
            <select
              id='book-occasion'
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value=''>Select Occasion:</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </select>
          </div>

          <div>
            <input
              aria-label='On Click'
              type='submit'
              value={"Make Your Reservation"}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </fieldset>
      </form>
    </section>
  );
};

export default BookForm;
