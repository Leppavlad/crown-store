import React from "react";
import "./checkout.styles.css";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import Payment from "../../components/payment/payment.component";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
  return (
    <>
      <section className="checkout">
        {!cartItems.length ? (
          <div className="checkout__empty">No items in cart yet</div>
        ) : (
          <>
            <div className="checkout__header">
              <div className="checkout__block checkout__block_large">
                Produce
              </div>
              <div className="checkout__block checkout__block_large">
                Description
              </div>
              <div className="checkout__block checkout__block_medium">
                Quantity
              </div>
              <div className="checkout__block checkout__block_medium">
                Price
              </div>
              <div className="checkout__block checkout__block_small">
                Remove
              </div>
            </div>
            <div className="checkout__list">
              {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))}
            </div>
            <div className="checkout__total">Total: ${cartItemsTotal}</div>
          </>
        )}
      </section>
      {/* <Payment /> */}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
