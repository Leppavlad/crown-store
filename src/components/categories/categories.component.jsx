import React from "react";
import ContentItem from "../../components/content-item/content-item";
import "./categories.styles.css";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.categories = [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ];
    this.state = {};
  }
  render() {
    return (
      <div className="main-categories">
        {this.categories.map((item) => {
          const { id, ...props } = item;
          return <ContentItem key={id} {...props} />;
        })}
      </div>
    );
  }
}
