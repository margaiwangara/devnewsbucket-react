import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

export default function Articles() {
  const result = useContext(AppContext);

  const display = result
    ? result.data.map(article => (
        <ul key={article._id}>
          <li>{article.title}</li>
          <li>{article.summary}</li>
          <li>{article.datePublished}</li>
        </ul>
      ))
    : null;
  return <>{display}</>;
}
