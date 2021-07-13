import React from "react";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleDropdownVisibility } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { withRouter } from "react-router";

import "./cart-dropdown.styles.css";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart__dropdown">
      {!cartItems.length ? (
        <span className="empty">No items yet</span>
      ) : (
        <ul className="cart-items__list">
          {cartItems.map((item) => (
            <CartDropdownItem key={item.id} {...item} />
          ))}
        </ul>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleDropdownVisibility());
        }}
        className="black"
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
