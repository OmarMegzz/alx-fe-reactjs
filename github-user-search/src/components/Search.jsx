import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState(null); // For storing user data
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error state

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const data = await fetchUserData(searchInput);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
    setSearchInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Search;
