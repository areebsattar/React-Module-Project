import FakeBookings from "@/data/fakeBookings.json";
import React from "react";
import { useState } from "react";
function TableBody(props) {
  const [selectedRow, setSelectedRow] = useState("unselect");
  function handleSelect() {
    setSelectedRow(selectedRow === "unselect" ? "selected" : "unselect");
  }
  let {
    id,
    title,
    name,
    firstName,
    surName,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    stayNights,
  } = props;
  return (
    <>
      <tr
        key={id}
        onClick={handleSelect}
        className={`table-row  ${selectedRow}`}
      >
        <td>{id}</td>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surName}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
        <td>{stayNights}</td>
        <td><button className="btn-show-customer-profile">Show Profile</button></td>
      </tr>
    </>
  );
}

export default TableBody;
