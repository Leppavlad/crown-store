import React from "react";
import HomepageItem from "../homepage-item/homepage-item";
import "./homepage-categories.styles.css";

import { connect } from "react-redux";
import { selectSections } from "../../redux/categories/categories.selectors";
import { createStructuredSelector } from "reselect";

const HomepageCategories = ({ sections }) => {
  return (
    <div className="main-categories">
      {sections.map((item) => {
        const { id, ...props } = item;
        return <HomepageItem key={id} {...props} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(HomepageCategories);
