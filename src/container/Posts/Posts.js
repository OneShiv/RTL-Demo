import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsReq = fetch("https://jsonplaceholder.typicode.com/posts");
    const postsJson = postsReq.then(postResp => postResp.json());
    postsJson.then(posts => {
      setPosts(posts.slice(0, 10));
    });
  }, []);

  let el = <p>Loading .....</p>;
  if (posts) {
    el = posts.map(post => (
      <Card
        data-testid="card"
        title={post.title}
        description={post.body}
        key={post.id}
      />
    ));
  }
  return (
    <div>
      <Link className="addPost" to="/new-post">
        +
      </Link>
      <h1>All Posts</h1>
      {el}
    </div>
  );
};

export default Posts;
