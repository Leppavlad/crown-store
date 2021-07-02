import "./content-item.css";

export const ContentItem = ({ title }) => {
  return (
    <div className="content-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};
