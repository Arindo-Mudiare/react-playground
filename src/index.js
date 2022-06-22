import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyList2 from "./MyList2";
import HigherOda from "./HigherOda";
import MyFeature from "./MyFeature";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyFeature
      addArticle={({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd,
      }) => (
        <AddArticle
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={onChangeTitle}
          onChangeSummary={onChangeSummary}
          onClickAdd={onClickAdd}
        />
      )}
      articleList={({ articles, onClickToggle, onClickRemove }) => (
        <ArticleList
          articles={articles}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      )}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
