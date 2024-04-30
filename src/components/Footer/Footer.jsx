import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-details">
      <ul>
        {props.details.map((detail, id) => (
          <p className="footer-detail" key={id}>
            {detail}
          </p>
        ))}
      </ul>
    </div>
  );
}
