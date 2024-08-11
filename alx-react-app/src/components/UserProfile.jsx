import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <>
      <h2>{name}</h2>
      <p>age: {age}</p>
      <p>bio: {bio}</p>
    </>
  );
}

export default UserProfile;
