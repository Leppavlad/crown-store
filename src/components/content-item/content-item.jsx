import "./content-item.css";
import { withRouter } from "react-router-dom";

const ContentItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <div
      className={`content-item ${size ? size : ""}`}
      onClick={() => history.push(match.url + linkUrl)}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(ContentItem);
