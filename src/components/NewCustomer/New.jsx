import "./NewCustomer.scss";
import { useState } from "react";

function New({ addBooking }) {
  const initialFormData = {
    title: "",
    firstName: "",
    surname: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    roomId: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function submithandler(event) {
    event.preventDefault();
    addBooking(formData);
    setFormData(initialFormData);
  }

  function handleChange(event) {
    const val = event.target.value;
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: val,
      };
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={submithandler}>
        <select
          className="form-input"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        >
          <option value="">Title</option>
          <option value="Sir">Sir</option>
          <option value="Madam">Madam</option>
          <option value="Miss">Miss</option>
          <option value="Mrs">Mrs</option>
          <option value="Mr">Mr</option>
        </select>
        <input
          className="form-input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          className="form-input"
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="form-input"
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          placeholder="Check In"
          required
        />
        <input
          className="form-input"
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          placeholder="Check Out"
          required
        />
        <input
          className="form-input"
          type="text"
          name="roomId"
          value={formData.roomId}
          onChange={handleChange}
          placeholder="Room ID"
          required
        />
        <button className="form-submit">Book Now</button>
      </form>
    </div>
  );
}

export default New;
