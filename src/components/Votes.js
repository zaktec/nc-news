import { useState } from "react";
import { patchArticleVote } from "../utils/api";

const Votes = ({ votes, article_id }) => {

//console.log(typeof votes)
  const [voteUpdate, setVoteUpdate] = useState(0);

  //console.log(typeof voteUpdate)

  const giveVote = () => {
    //  console.log(article_id)
    setVoteUpdate((currChange) => currChange + 1);
    patchArticleVote(article_id).catch((err) => {
      setVoteUpdate((currChange) => currChange - 1);
    });

    
  };
  return <button onClick={() => giveVote()}>{votes + voteUpdate}</button>;
};
export default Votes;
