import React from "react";
import "./styles.css";
import NewPost from "./components/NewPost/NewPost";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./container/Posts/Posts";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </Router>
    </div>
  );
}
