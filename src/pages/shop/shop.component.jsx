import React from "react";
import "./shop.styles.css";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";

import WithSpinner from "../../components/with-spinner/with-spinner.components";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Collections extends React.Component {
  state = {
    isLoading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsToMap(snapshot);
      updateShopCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsToMap(snapshot);
    //   updateShopCollections(collectionsMap);
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    // console.log(match);
    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateShopCollections: (collections) =>
    dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Collections);
