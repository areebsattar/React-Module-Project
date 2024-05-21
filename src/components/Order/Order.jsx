import { useState } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton";
import "./Order.scss";
function Order({ orderType }) {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <li className="restaurant__item order">
      <span className="order__type">{orderType}</span>
      <div className="order__controls">
        <span className="order__quantity">Quantity: {quantity}</span>
        <RestaurantButton
          text="Add"
          onClick={incrementQuantity}
          className="restaurant__button order__button"
        />
      </div>
    </li>
  );
}

export default Order;
