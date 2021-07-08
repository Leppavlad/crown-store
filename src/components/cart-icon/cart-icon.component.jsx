import React from "react";
import { ReactComponent as Cart } from "../../assets/icons/shopping-bag.svg";

import { connect } from "react-redux";
import { toggleDropdownVisibility } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.css";

const CartIcon = ({ toggleDropdownVisibility }) => {
  return (
    <div className="cart" onClick={toggleDropdownVisibility}>
      <Cart className="cart__icon" />
      <span className="cart__num">4</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdownVisibility: () => dispatch(toggleDropdownVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
