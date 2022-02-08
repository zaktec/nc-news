import React, { useEffect, useState } from "react";
import "../App.css";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [topiclist, setTopicList] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      console.log(res);
      setTopicList(res);
    });
  }, []);

  return (
    <main className="TopicList">
      <h1> TopicList </h1>
      <ul>
        {topiclist.map((topic) => {
          return(
              <Link key= {topic.topic_slug} to = {`/articlelist/${topic.topic_slug}`}>
         <li> 
          {topic.topic_slug}
          <p>{topic.topic_description}</p>
           </li>
           </Link>
        )
        })}
      </ul>
    </main>
  );
};
export default TopicList;
