import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <div>profile</div>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="setting">Profile Settings</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Profile;
