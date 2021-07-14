import React from "react";
import "./collections-overview.styles.css";

import Collection from "../../components/collection/collection.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {Object.keys(collections).map((key) => {
        const { id, ...data } = collections[key];
        return <Collection key={id} {...data} />;
      })}
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(MapStateToProps)(CollectionsOverview);
