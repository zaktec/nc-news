import { useEffect, useState } from "react";
import { getCommentApi } from "../utils/api";

const Comments = ({ article_id }) => {


  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  //console.log(displayComments);

  useEffect(() => {
   // console.log(article_id);
    getCommentApi(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <div>
      <button
        onClick={() =>
          setDisplayComments((currentValue) => {
            return !currentValue;
          })
        }
      >
        Get Comments
      </button>
      {displayComments ? (
        <div>
          <h3>Comment List</h3>
          <ul>
            {comments.map((comment) => {
              return <li key={comment.comment_id}> {comment.comment_body}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Comments;
