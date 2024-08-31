import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <>
      <div>profile</div>
      <nav>
        <Link to="details">Profile Details</Link> |
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default Profile;
