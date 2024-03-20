import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import { useState, useEffect } from "react";

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
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult results={bookings} />
    </main>
  );
};
export default Bookings;
