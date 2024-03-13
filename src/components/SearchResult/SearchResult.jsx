import { useEffect } from "react";
import { useState } from "react";
import "./SearchResult.scss";
// import FakeBookings from "@/data/fakeBookings.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import dayjs from "dayjs";

// const Bookings = FakeBookings;
function SearchResult() {
  const [fakeBookings, setFakeBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => setFakeBookings(data));
  }, []);
  console.log(fakeBookings);
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {fakeBookings.map((book) => {
          const stayNightsTotal = dayjs(book.checkOutDate).diff(
            dayjs(book.checkInDate),
            "day"
          );
          return (
            <TableBody
              key={book.id}
              id={book.id}
              title={book.title}
              firstName={book.firstName}
              surName={book.surname}
              email={book.email}
              roomId={book.roomId}
              checkInDate={book.checkInDate}
              checkOutDate={book.checkOutDate}
              stayNights={stayNightsTotal}
            />
          );
        })}
      </tbody>
    </table>
  );
}
export default SearchResult;
