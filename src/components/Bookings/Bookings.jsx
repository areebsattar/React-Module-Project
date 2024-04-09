import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import { useState, useEffect } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetch("https://cyf-hotel-api.netlify.app/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((error) => {
        setFetchError(error);
        console.error(error);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const searchValueCase = searchVal.toLowerCase();
    const filteredBookings = bookings.filter((booking) => {
      const firstName = booking.firstName.toLowerCase();
      const lastName = booking.surname.toLowerCase();
      return (
        firstName.includes(searchValueCase) ||
        lastName.includes(searchValueCase)
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {fetchError ? (
        <div>Error: {fetchError.message}</div>
      ) : (
        <SearchResult results={bookings} />
      )}
    </main>
  );
};

export default Bookings;
