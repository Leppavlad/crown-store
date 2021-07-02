import "./content-item.css";

const ContentItem = ({ title, imageUrl, linkUrl, size }) => {
  return (
    <div className={`content-item ${size ? size : ""}`}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <a href={linkUrl} className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </a>
    </div>
  );
};

export default ContentItem;
