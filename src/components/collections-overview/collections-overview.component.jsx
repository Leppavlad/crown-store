import React from "react";
import "./collections-overview.styles.css";

import Collection from "../../components/collection/collection.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionAsArray } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...data }) => {
        return <Collection key={id} {...data} />;
      })}
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  collections: selectCollectionAsArray,
});

export default connect(MapStateToProps)(CollectionsOverview);
