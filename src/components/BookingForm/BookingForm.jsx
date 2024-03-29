import React, { useState } from "react";

function BookingForm({ addBooking }) {
  const [bookingData, setBookingData] = useState({
    id: "",
    title: "",
    firstName: "",
    surName: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBooking(bookingData);
    setBookingData({
      id: "",
      title: "",
      firstName: "",
      surName: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={bookingData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={bookingData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={bookingData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Lastname:</label>
        <input
          type="text"
          name="surName"
          value={bookingData.surName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={bookingData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Room id:</label>
        <input
          type="text"
          name="roomId"
          value={bookingData.roomId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Check in Date:</label>
        <input
          type="text"
          name="checkInDate"
          value={bookingData.checkInDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Check out Date:</label>
        <input
          type="text"
          name="checkOutDate"
          value={bookingData.checkOutDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
