import React, { useEffect, useState } from "react";
import "../App.css";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ArticleList = (props) => {
  console.log(props);
  //{ SortBy } = props;
  const [articlelist, setArticleList] = useState([]);
  const { topic_name } = useParams();
  const [isLoading, setIsLoading] =useState(true)


 // console.log(topic_name);

  useEffect(() => {
    getArticles(topic_name, props.sortBy ).then((res) => {
      // console.log(res);
      setArticleList(res);
      setIsLoading(false)
    });
  }, [topic_name, props.sortBy]);


  if (isLoading) return <p>Loading....</p>

  return (

    <div className="ArticleListCss">
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
    </div>
  );
};
export default ArticleList;
