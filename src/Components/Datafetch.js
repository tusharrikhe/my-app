import React, { useEffect, useState } from "react";
import { axios } from "axios";

const Datafetch = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Datafetch;
