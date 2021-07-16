import React from "react";
import "./collection.styles.css";

import CollectionItem from "../collection-item/collection-item.components";

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h2>{title}</h2>
      <div className="collection-list">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
