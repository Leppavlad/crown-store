import React from "react";
import { ContentItem } from "../content-item/content-item";
import "./content-page.css";

export const ContentPage = () => {
  return (
    <div className="main-page">
      <ContentItem title="Hats" />
      <ContentItem title="Jackets" />
      <ContentItem title="Sneakers" />
      <ContentItem title="Womens" />
      <ContentItem title="Mens" />
    </div>
  );
};
