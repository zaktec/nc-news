import React from "react";
import "../App.css";
import { deleteCommentApi, getCommentApi } from "../utils/api";

const DeleteComment = (props) => {
    
  const deleteCommentButton = () => {
    console.log(props.comment_id)
    deleteCommentApi(props.comment_id).then(()=>{
        getCommentApi(props.article_id).then((comments) => {
            props.setComments(comments);

        });
        
    });

  };

  return <button onClick={() => deleteCommentButton()}>Delete Comment</button>;
};
export default DeleteComment;
