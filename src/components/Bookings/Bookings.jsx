import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import FakeBookings from "@/data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

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
      <SearchResult results={bookings} />
    </main>
  );
};
export default Bookings;
