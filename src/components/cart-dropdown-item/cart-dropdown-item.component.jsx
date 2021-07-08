import React from "react";
import "./cart-dropdown-item.styles.css";

const CartDropdownItem = ({ name, image, amount, price }) => {
  return (
    <li className="cart-item">
      <div
        className="cart-item__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="cart-item__details">
        <h3 className="cart-item__name">{name}</h3>
        <p className="cart-item__sum">
          {amount} x ${price}
        </p>
      </div>
    </li>
  );
};

export default CartDropdownItem;
