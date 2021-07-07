import React from "react";
import "./collection.styles.css";

import CollectionItem from "../collection-item/collection-item.components";

const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h2>{title}</h2>
      <div className="collection-list">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem key={id} {...rest} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
