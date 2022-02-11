import React, { useEffect, useState } from "react";
import "../App.css";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [topiclist, setTopicList] = useState([]);
  const [isLoading, setIsLoading] =useState(true)

  useEffect(() => {
    getTopics().then((res) => {
      // console.log(res);
      setTopicList(res);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading....</p>
  
  return (
    <main className="TopicListClass">
      <h1> TopicList </h1>
       <ul className = "TopicList">
        {topiclist.map((topic) => {
          return (
             <li key={topic.topic_slug}>
               <h3>
                 <Link to={`/articlelist/${topic.topic_slug}`}>
                   {topic.topic_slug}</Link>
             </h3>
         
               <p> {topic.topic_description}</p>
             </li>
          )
        })}
    
      </ul> 
    </main>
  );
};
export default TopicList;


   // return (
          //   <Link
          //     key={topic.topic_slug}
          //     to={`/articlelist/${topic.topic_slug}`}
          //   >
          //     <li>
          //       <h3>{topic.topic_slug}</h3>
          //       {/* <p> {topic.topic_description}</p> */}
          //     </li>
          //   </Link>
          // );