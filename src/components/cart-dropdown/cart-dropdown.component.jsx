import React from "react";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.css";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart__dropdown">
      <ul className="cart-items__list">
        {cartItems.map((item) => (
          <CartDropdownItem key={item.id} {...item} />
        ))}
      </ul>
      <CustomButton className="black">Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
