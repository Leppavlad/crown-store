import React from "react";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.components";

import "./collection.styles.css";

const Collection = ({ match, collection }) => {
  console.log(match);
  console.log(collection);
  return (
    <div className="collection">
      <h2>{collection.title}</h2>
      <section className="collection__wrapper">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
