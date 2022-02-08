import { useState } from "react";
import { patchArticleVote } from "../utils/api";

const Votes = ({ votes, article_id }) => {
const [voteUpdate, setVoteUpdate] = useState(0);
  const giveVote = () => {
    //  console.log(article_id)
    setVoteUpdate((currChange) => currChange + 1); 
    patchArticleVote(article_id).then((updatedVote) => {


    });
  };

  return <button onClick={() => giveVote()}>{votes + voteUpdate}</button>;
};
export default Votes;
