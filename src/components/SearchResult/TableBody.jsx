import React from "react";
import { useState } from "react";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
function TableBody(props) {
  const [selectedRow, setSelectedRow] = useState("unselect");
  const [showProfile, setShowProfile] = useState(false);
  function handleSelect() {
    setSelectedRow(selectedRow === "unselect" ? "selected" : "unselect");
    showProfileHandle();
  }

  function showProfileHandle() {
    setShowProfile(!showProfile);
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
        <td><button className="btn-show-customer-profile" onClick={handleSelect}>Show Profile</button></td>
      </tr>
      {showProfile ? <CustomerProfile id={id}/> : null}
    </>
  );
}

export default TableBody;
