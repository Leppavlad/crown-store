import React from "react";
import "./collection-item.styles.css";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div key={id} className="item__card">
      <div
        className="item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="item__text">
        <div className="item__name">{name}</div>
        <div className="item__price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
