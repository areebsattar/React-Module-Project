import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import { useState, useEffect } from "react";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://nw6-cyf-hotel.glitch.me/delayed")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}: ${getReasonPhrase(res.status)}`);
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        setFetchError(error);
        console.log(error);
        setLoading(false);
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
      {loading && <p>Loading Information Please Wait...</p>}
      {!loading && <SearchResult results={bookings} />}
    </main>
  );
};
export default Bookings;
