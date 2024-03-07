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

  // Simulated form submission (replace with your actual API endpoint)
  const mockSubmit = async () => {
    // Simulate a successful submission
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ok: true });
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!date || !times || !guests || !occasion) {
      setError("All fields are required");
      return;
    }

    try {
      // Use the mockSubmit function to simulate form submission
      const response = await mockSubmit();

      if (response.ok) {
        // If the submission is successful, navigate to the success page
        navigate("/success");
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
