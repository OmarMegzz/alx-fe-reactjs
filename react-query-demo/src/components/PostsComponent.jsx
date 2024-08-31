import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError } = useQuery("fetchPosts", fetchPosts);

  if (isLoading) return <div>loading.....</div>;

  if (isError) return <div>error loading data</div>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default PostsComponent;
