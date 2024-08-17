import React, { useContext } from "react";

import UserInfo from "./UserInfo";
import userContext from "./UserContext";

function ProfilePage() {
  return (
    <>
      <h1>profile page</h1>
      <UserInfo />
    </>
  );
}

export default ProfilePage;
