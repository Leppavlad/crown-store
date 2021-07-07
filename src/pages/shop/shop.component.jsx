import React from "react";
import "./shop.styles.css";

import Collection from "../../components/collection/collection.component";
import SHOP_DATA from "../../SHOP_DATA";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
    };
  }
  render() {
    return (
      <>
        <h1>Collections</h1>
        <div className="collections">
          {SHOP_DATA.map(({ id, ...data }) => {
            return <Collection key={id} {...data} />;
          })}
        </div>
      </>
    );
  }
}
