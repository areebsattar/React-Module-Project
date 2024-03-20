import React, { useState } from 'react';
import "./SearchResult.scss";
import FakeBookings from "@/data/fakeBookings.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import dayjs from "dayjs";

const Bookings = FakeBookings;

function SearchResult() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Function to handle sorting when a column header is clicked
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sorting function based on the current sort configuration
  const sortedBookings = [...Bookings].sort((a, b) => {
    if (sortConfig.key === null) return 0;

    const sortOrder = sortConfig.direction === 'ascending' ? 1 : -1;
    return a[sortConfig.key].localeCompare(b[sortConfig.key]) * sortOrder;
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>ID</th>
          <th onClick={() => handleSort('title')}>Title</th>
          <th onClick={() => handleSort('firstName')}>First Name</th>
          <th onClick={() => handleSort('surname')}>Surname</th>
          <th onClick={() => handleSort('email')}>Email</th>
          <th onClick={() => handleSort('roomId')}>Room ID</th>
          <th onClick={() => handleSort('checkInDate')}>Check In Date</th>
          <th onClick={() => handleSort('checkOutDate')}>Check Out Date</th>
        </tr>
      </thead>
      <tbody>
        {sortedBookings.map((book) => {
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
