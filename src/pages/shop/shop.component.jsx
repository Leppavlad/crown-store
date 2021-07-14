import React from "react";
import Collection from "../collection/collection.component";
import "./shop.styles.css";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const Collections = ({ match }) => {
  console.log(match);
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </>
  );
};

export default Collections;
