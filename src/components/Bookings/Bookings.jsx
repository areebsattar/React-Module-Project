import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import FakeBookings from "@/data/fakeBookings.json";
// import SearchResults from "@/componentsSearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([...FakeBookings]);

  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult bookings={bookings} />
      <BookingForm addBooking={addBooking} />
    </main>
  );
};

export default Bookings;
