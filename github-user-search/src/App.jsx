import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import fetchUserData from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setError("");
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("User not found or API error");
    }
  };

  return (
    <>
      <h1>GitHub User Search</h1>
      <Search onSubmit={handleSearch} />

      {userData && (
        <div>
          <h2>Name : {userData.login}</h2>
          <p>Type : {userData.type}</p>
          <p>Followers : {userData.followers}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
