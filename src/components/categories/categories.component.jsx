import React from "react";
import ContentItem from "../../components/content-item/content-item";
import "./categories.styles.css";

import { connect } from "react-redux";
import { selectSections } from "../../redux/categories/categories.selectors";
import { createStructuredSelector } from "reselect";

const Categories = ({ sections }) => {
  return (
    <div className="main-categories">
      {sections.map((item) => {
        const { id, ...props } = item;
        return <ContentItem key={id} {...props} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Categories);
