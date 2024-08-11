import React from "react";

function UserProfile(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </>
  );
}

export default UserProfile;
