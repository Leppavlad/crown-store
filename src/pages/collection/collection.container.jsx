import { compose } from "redux";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsAreLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.components";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsAreLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
