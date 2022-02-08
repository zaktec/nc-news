import React, { useEffect, useState } from "react";
import "../App.css";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articlelist, setArticleList] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    getArticles().then((res) => {
      //  console.log(res);
      setArticleList(res);
    });
  }, []);

  return (
    <main className="ArticleList">
      <h1> ArticleList </h1>
      <ul>
        {articlelist.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <li> {article.article_title}</li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};
export default ArticleList;
