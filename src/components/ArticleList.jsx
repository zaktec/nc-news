import React, { useEffect, useState } from "react";
import "../App.css";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//import Votes from "./Votes";

const ArticleList = () => {
  const [articlelist, setArticleList] = useState([]);
  const { topic_name } = useParams();
  console.log(topic_name);

  useEffect(() => {
    getArticles(topic_name).then((res) => {
      //  console.log(res);
      setArticleList(res);
    });
  }, [topic_name]);

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
