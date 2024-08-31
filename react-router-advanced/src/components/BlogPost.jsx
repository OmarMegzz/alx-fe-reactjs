import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <>
      <h1>Blog post {id}</h1>
      <p>Content for blog post {id} goes here.</p>
    </>
  );
}

export default BlogPost;
