import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();
  return (
    <div>
      <h1>user profile : {username}</h1>
    </div>
  );
}

export default UserProfile;
