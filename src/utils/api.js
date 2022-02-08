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

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
     // console.log(res)
    return res.data.articles;
  });
};
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