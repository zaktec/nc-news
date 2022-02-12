import React, { useState } from "react";
import ArticleList from "./ArticleList";
import "../App.css";


const SortArticles = () => {
  const [sortBy, setSortBy] = useState("article_title");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    
      <main className="SortArticleClass" >
        <div>
        <h1>ArticleList </h1>
        <p>Choose a column to sort the articles List </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="categories">Choose a category:</label>
          <select name="categories" id="categories" onChange={handleChange}>
            <option value="All">All</option>
            <option value="article_id">article_id</option>
            <option value="article_title">article_title</option>
            <option value="article_created">article_created</option>
          </select>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <p>Click the "Submit" button .</p>
      </div>
      <ArticleList sortBy = {sortBy} />
    </main>
  );
};

export default SortArticles;
