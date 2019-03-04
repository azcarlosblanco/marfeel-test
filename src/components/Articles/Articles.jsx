import React from "react";
import "./Articles.css";
import Article from "./Article/Article";

const Articles = ({ articles }) => {
  if (! articles) {
    return null
  }

  return (
    <section className="articles-container">
      {articles.length && articles.map((article, index) => (
         <Article key={index} data={article} />
      ))}
    </section>
  );
};

export default Articles;
