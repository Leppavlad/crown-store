import React from "react";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.css";

const CartDropdown = () => {
  return (
    <div className="cart__dropdown">
      <ul className="cart-items__list"></ul>
      <CustomButton className="black">Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
