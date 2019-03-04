import React from "react";
import "./Article.css";

const Article = ({ data }) => {
  return (
    <div className="article-card">
      <div className="meta">
        <div
          className="photo"
          style={{
            backgroundImage:
              `url(${data.imageUrl})`
          }}
        />
      </div>
      <div className="description">
        <h1>{ data.title }</h1>
        <p>
          {" "}
          { data.description }
        </p>
      </div>
    </div>
  );
};

export default Article;
