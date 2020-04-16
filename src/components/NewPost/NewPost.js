import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const NewPost = () => {
  const [post, setPost] = useState({
    title: "",
    description: ""
  });
  const [postSuccess, setPostSuccess] = useState(false);
  const submitHandler = async e => {
    e.preventDefault();
    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify(post)
    });

    let newPostResp = await req.json();
    if (newPostResp) {
      setPostSuccess(true);
    }
  };
  return (
    <div>
      {postSuccess && <Redirect to="/" />}
      <h4>Create a new Post</h4>
      <form onSubmit={submitHandler}>
        <label htmlFor="post-title" name="title">
          Enter Title for post
        </label>
        <input
          id="post-title"
          type="text"
          minLength={10}
          onChange={e =>
            setPost({
              title: e.target.value
            })
          }
        />
        <label htmlFor="post-description" name="title">
          Enter Description for post
        </label>
        <input
          id="post-description"
          type="textarea"
          minLength={10}
          onChange={e =>
            setPost({
              description: e.target.value
            })
          }
        />
        <input
          style={{
            display: "block",
            margin: "auto"
          }}
          type="submit"
          value="Create Post"
        />
      </form>
    </div>
  );
};

export default NewPost;
