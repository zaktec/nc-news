import { useEffect, useState } from "react";
import { getCommentApi } from "../utils/api";
import DeleteComment from "./DeleteComment";

const Comments = ({ article_id, comments, setComments }) => {

  const [displayComments, setDisplayComments] = useState(false);
  //console.log(displayComments);

  useEffect(() => {
   // console.log(article_id);
    getCommentApi(article_id).then((comments) => {
      setComments(comments);
      //console.log(comments)
     
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
          {/* //(!comments)}? <p>No Comments</p> :  */}
          <h3>Comment List</h3>
          <ul>
            {comments.map((comment) => {
              return ( 
              <li key={comment.comment_id}> 
              <p>Author:  {comment.comment_author}</p>
              <p> {comment.comment_body}</p>
              <p>{comment.comment_id}</p>


              <DeleteComment comment_id = {comment.comment_id}
              article_id = {article_id} 
              setComments = {setComments}  />
              
              </li>
              )
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
