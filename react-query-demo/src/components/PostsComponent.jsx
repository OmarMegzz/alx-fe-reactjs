import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery(
    "fetchPosts",
    fetchPosts,
    {
      staleTime: 5000,
      cacheTime: 10000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div>loading.....</div>;

  if (isError) return <div>error loading data</div>;

  return (
    <>
      <button onClick={() => refetch()}>
        {isFetching ? "Refetching..." : "Refetch posts"}
      </button>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  );
};

export default PostsComponent;
