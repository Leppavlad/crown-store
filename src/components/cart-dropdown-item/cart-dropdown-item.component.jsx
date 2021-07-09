import React from "react";
import "./cart-dropdown-item.styles.css";

const CartDropdownItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <li className="cart-item">
      <div className="cart-item__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cart-item__details">
        <h3 className="cart-item__name">{name}</h3>
        <p className="cart-item__sum">
          {quantity} x ${price}
        </p>
      </div>
    </li>
  );
};

export default CartDropdownItem;
