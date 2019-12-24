import { useState, useEffect } from "react";
import axios from "axios";

export function useArticles() {
  const [articles, setArticles] = useState({ data: [] });

  useEffect(() => {
    async function fetchArticles() {
      const URL = `https://devnewsbucket.margaiwangara.me/api/articles`;
      try {
        const response = await axios.get(URL);
        const { data } = response;

        setArticles(data);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    fetchArticles();
  }, []);

  return articles;
}
