import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { title, url, image } = props;
  return (
    <div className="card">
      <h2></h2>
      <img src={image} alt={title} />

      <a href={url} className="cardhref ">
        {" "}
        {title}
      </a>
    </div>
  );
};

export default Card;
