import React from "react";

export default function Article({ article }) {
  return (
    <ul>
      <li>{article.title}</li>
      <li>{article.summary}</li>
      <li>{article.datePublished}</li>
    </ul>
  );
}
