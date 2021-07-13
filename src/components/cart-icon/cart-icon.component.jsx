import React from "react";
import { ReactComponent as Cart } from "../../assets/icons/shopping-bag.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleDropdownVisibility } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.css";

const CartIcon = ({ toggleDropdownVisibility, goodsCount }) => {
  return (
    <div className="cart" onClick={toggleDropdownVisibility}>
      <Cart className="cart__icon" />
      <span className="cart__num">{goodsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  goodsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdownVisibility: () => dispatch(toggleDropdownVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
