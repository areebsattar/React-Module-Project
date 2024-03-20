import "./SearchResult.scss";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import dayjs from "dayjs";

function SearchResult(props) {
  const Bookings = props.results;
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {Bookings.map((book) => {
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

