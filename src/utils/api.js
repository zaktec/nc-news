import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://sheraz-news-app1.herokuapp.com/api",
});

export const getMessage = () => {
  return newsApi.get("/welcome").then((res) => {
    //  console.log(res)
    return res.data.msg;
  });
};


export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
      //console.log(res)
    return res.data.topics;
  });
};

// export const getArticles = (topic_name) => {
//   let path = "/articles";
//   if (topic_name) path += `?article_topic=${topic_name}`
//   return newsApi.get(path).then((res) => {
//      // console.log(res)
//     return res.data.articles;
//   });
// };


export const getArticles = (topic_name, sort_by) =>{
 return newsApi.get(`/articles`,{
   params: { article_topic: topic_name, sort_by },
 })
 .then (({ data }) => {
   return data.articles;
 })

}


export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
      //console.log(res)
    return res.data.article;
  });
};

export const patchArticleVote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, {inc_votes : 1 })
  .then((res) => {
      //console.log(res.data)
    return res.data.article;
  });
};

export const getCommentApi = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
      //console.log(data)
    return data.comments;
  });
};

//"DELETE /api/comments/:comment_id"

export const deleteCommentApi = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`)
  .then(({data}) => {
    return data.comments;
   
  });
};

export const postCommentApi = (article_id, resBody) => {
  return newsApi.post
  (`/articles/${article_id}/comments`, resBody)
  .then(({data}) => {
    return data.comments;
   
  });
};