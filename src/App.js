//import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import Article from "./components/Article";
import SortArticles from "./components/SortArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Home />}></Route>
          <Route path="/articlelist" element={<SortArticles />}></Route>
          <Route path="/topiclist" element={<TopicList />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
          <Route
            path="/articlelist/:topic_name"
            element={<ArticleList />}
          ></Route>
        </Routes>
        <Footer year={new Date().getFullYear()} />
      </div>
    </BrowserRouter>
  );
}

export default App;
