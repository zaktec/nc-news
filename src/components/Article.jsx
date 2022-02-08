import React, { useEffect, useState } from 'react'
import "../App.css";
import { getSingleArticle } from '../utils/api';
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Votes from './Votes';


const Article = () => {
  const { article_id } = useParams();
 const [article, setArticle] = useState({});

 //console.log(article_id)
  useEffect(() => {
    getSingleArticle(article_id).then((res) => {
     // console.log(res);
      setArticle(res)
    });
  }, [article_id]);

  return (
    <div className="Article">
      <h3>Article ID: </h3>
      <p>{article.article_id} </p>

      <h3>Title: </h3>
      <p>{article.article_title}</p>

      <h3>Author: </h3>
      <p>{article.article_author}</p>

      <h3>Article Topic: </h3>
      <p>{article.article_topic}</p>

      <h3>Article Vote: </h3>
      <Votes votes = {article.article_votes} article_id =
       {article.article_id} />
     
      <h3>Article Count: </h3>
      <p>{article.count}</p>

    </div>
  );
};
export default Article;
