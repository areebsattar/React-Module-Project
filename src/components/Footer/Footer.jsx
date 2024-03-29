import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <>
      <ul>
        {props.details.map((detail, id) => (
          <li key={id}>{detail}</li>
        ))}
      </ul>
    </>
  );
}
