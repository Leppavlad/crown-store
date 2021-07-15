import React from "react";
import "./collection-item.styles.css";

import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="item__card">
      <div
        className="item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="item__image__bgBright">
          <CustomButton
            mode="whiteTransparent"
            onClick={() => addItemToCart({ id, name, price, imageUrl })}
          >
            Add to cart
          </CustomButton>
        </div>
      </div>
      <div className="item__text">
        <div className="item__name">{name}</div>
        <div className="item__price">{price}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
