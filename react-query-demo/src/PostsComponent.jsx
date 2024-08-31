import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading } = useQuery("fetchData", fetchData);

  if (isLoading) return <div>loading.....</div>;

  if (error) return <div>error loading data</div>;

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default PostsComponent;
