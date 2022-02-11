import React, { useState } from "react";
import "../App.css";
import {  postCommentApi } from "../utils/api";

const PostComment = (props) => {
    const{ article_id, setComments} = props;
  const [displayPost, setPostDisplay] = useState(false);
  const [newComment, setNewComments] = useState("");
  const [newAuthor, setNewAuthor] = useState("");


//   const handleChange = (event) => {
//     if (event.target.name === "newComment") {
//        console.log(newComment);
//       setNewComments(event.target.value);
//      } else setNewAuthor(event.target.value);
//      console.log(event.target.name)
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObject = {comment_author: newAuthor, comment_body: newComment } 
    console.log(newComment, newAuthor)
    console.log(newObject)
    postCommentApi(article_id, newObject)
    setComments((currentValue)=>{
        const newCommentList = currentValue.map((comment)=>{
            return  {...comment}
        })
        newObject.comment_id = 0;
        newObject.comment_votes = 0;
        newObject.comment_created =  "created now";
     newCommentList.unshift(newObject) 
     
     return newCommentList;

    })

  };

 console.log(newComment)
  return (
    <div>
      <button
        onClick={() =>
          setPostDisplay((currentValue) => {
            return !currentValue;
          })
        }
      >
        Post Comment
      </button>
      {displayPost ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Please Insert Your comment</p>
              <input
                name="newComment"
                placeholder="Insert Comment"
                onChange={(event)=> setNewComments(event.target.value) }
                value={newComment}
              />
              <input
                name="newAuthor"
                placeholder="Author Name"
                onChange={(event)=> setNewAuthor(event.target.value)}
                value={newAuthor}
              />
            </label>
            <button>Go!</button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default PostComment;
