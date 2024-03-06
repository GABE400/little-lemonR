import React, { useState, useEffect } from "react";
import "./BookForm.css";

const BookForm = () => {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  useEffect(() => {
    // Function to check if the selected date is a weekend
    const isWeekend = (date) => {
      const day = new Date(date).getDay();
      return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    };

    // Function to update available times based on the selected date
    const updateAvailableTimes = () => {
      if (reservationDate && isWeekend(reservationDate)) {
        // If it's a weekend, include only evening hours
        setAvailableTimes([
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ]);
      } else {
        // For weekdays, include both afternoon and evening hours
        setAvailableTimes([
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ]);
      }
    };

    // Call the function to update available times
    updateAvailableTimes();
  }, [reservationDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      reservationDate,
      reservationTime,
      numOfGuests,
      occasion,
    });
  };

  return (
    <section id='booking'>
      <form className='booking-container' onSubmit={handleSubmit}>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />

        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(parseInt(e.target.value, 10))}
        />

        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>

        <input type='submit' value='Make Your reservation' />
      </form>
    </section>
  );
};

export default BookForm;

// import React from "react";
// import "./BookForm.css";

// const BookForm = () => {
//   return (
//     <section id=''>
//       <form className='booking-container'>
//         <label for='res-date'>Choose date</label>
//         <input type='date' id='res-date' />
//         <label for='res-time'>Choose time</label>
//         <select id='res-time '>
//           <option>17:00</option>
//           <option>18:00</option>
//           <option>19:00</option>
//           <option>20:00</option>
//           <option>21:00</option>
//           <option>22:00</option>
//         </select>
//         <label for='guests'>Number of guests</label>
//         <input type='number' placeholder='1' min='1' max='10' id='guests' />
//         <label for='occasion'>Occasion</label>
//         <select id='occasion'>
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>
//         <input type='submit' value='Make Your reservation' />
//       </form>
//     </section>
//   );
// };

// export default BookForm;
