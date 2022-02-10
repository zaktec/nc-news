import React, { useState } from "react";
import "../App.css";
import { postCommentApi } from "../utils/api";

const PostComment = (article_id) => {
  const [displayPost, setPostDisplay] = useState(false);
  const [newComment, setNewComments] = useState("");
  const [newAuthor, setNewAuthor] = useState([]);

  //   useEffect(() => {
  //     console.log(article_id);
  //     // postCommentApi(article_id).then((comments) => {
  //     //  setNewComments(comments);
  //     // });
  //   });

  const handleChange = (event) => {
    if (event.target.name === "newComment") {
      setNewComments(event.target.value);
      //console.log(newComment);
    } else setNewAuthor(event.target.value);
    // console.log(event.target.name)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentApi(article_id);
  };

  return (
    <div>
      <button
        onClick={() =>
          setPostDisplay((currentValue) => {
            return !currentValue;
          })
        }
          >Post Comment</button>
      {displayPost ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Please Insert Your comment</p>
              <input
                name="newComment"
                placeholder="comment"
                onChange={handleChange}
                value={newComment}
              />
              <input
                name="newAuthor"
                placeholder="Author"
                onChange={handleChange}
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
