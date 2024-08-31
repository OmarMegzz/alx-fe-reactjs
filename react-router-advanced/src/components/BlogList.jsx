import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";

function BlogList() {
  const blogPosts = [
    { id: 1, title: "first blog" },
    { id: 2, title: "second blog" },
    { id: 3, title: "third blog" },
    { id: 4, title: "fourth blog" },
  ];

  return (
    <>
      <h1>blog post </h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Profile />
    </>
  );
}

export default BlogList;
