import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Profile from "./components/profile";
import BlogPost from "./components/BlogPost";
import UserProfile from "./components/UserProfile";
import BlogList from "./components/BlogList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />

          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
