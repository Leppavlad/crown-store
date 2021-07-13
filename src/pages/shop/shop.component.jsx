import React from "react";
import "./shop.styles.css";

import Collection from "../../components/collection/collection.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const Categories = ({ collections }) => {
  return (
    <>
      <h1>Collections</h1>
      <div className="collections">
        {collections.map(({ id, ...data }) => {
          return <Collection key={id} {...data} />;
        })}
      </div>
    </>
  );
};

const MapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(MapStateToProps)(Categories);
