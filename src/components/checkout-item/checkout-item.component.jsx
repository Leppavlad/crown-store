import React from "react";
import "./checkout-item.styles.css";

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({
  item,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const { id, name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="checkout-item__block checkout-item__block_large checkout-item__product">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkout-item__block checkout-item__block_large checkout-item__description">
        {name}
      </div>
      <div className="checkout-item__block checkout-item__block_medium checkout-item__quantity">
        <button
          className="chevron decrease"
          onClick={() => decreaseQuantity(id)}
        >
          &#10094;
        </button>
        <span className="checkout-item__quantity-num">{quantity}</span>
        <button
          className="chevron increase"
          onClick={() => increaseQuantity(id)}
        >
          &#10095;
        </button>
      </div>
      <div className="checkout-item__block checkout-item__block_medium checkout-item__price">
        ${price}
      </div>
      <div className="checkout-item__block checkout-item__block_small checkout-item__remove">
        <button className="remove" onClick={() => removeItem(id)}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
