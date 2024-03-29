import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";

import BookingForm from "../BookingForm/BookingForm";
import FakeBookings from "@/data/fakeBookings.json";
// import SearchResults from "@/componentsSearchResults.js";
import { useState, useEffect } from "react";
  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [...prevBookings, newBooking]);
  };




const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://nw6-cyf-hotel.glitch.me/fakebookings")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${getReasonPhrase(res.status)}`);
        }
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((error) => {
        setFetchError(error);
        console.log(error);
      });
  }),
    [];

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const searchValueCase = searchVal.toLowerCase();
    const fils = FakeBookings.filter((book) => {
      const firstName = book.firstName.toLowerCase();
      const lastName = book.surname.toLowerCase();
      return (
        firstName.includes(searchValueCase) ||
        lastName.includes(searchValueCase)
      );
    });
    setBookings(fils);
  };

  return (
    <main className="bookings">
      <Search search={search} />

      <BookingForm addBooking={addBooking} />

      <SearchResult results={bookings} />

    </main>
  );
};
export default Bookings;
