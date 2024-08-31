import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

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
