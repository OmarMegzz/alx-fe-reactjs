import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="setting" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
