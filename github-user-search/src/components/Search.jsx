import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [minReposInput, setMinReposInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchInputChange = (e) => setSearchInput(e.target.value);
  const handleLocationInputChange = (e) => setLocationInput(e.target.value);
  const handleMinReposInputChange = (e) => setMinReposInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(
        searchInput,
        locationInput,
        minReposInput
      );

      if (data.items && data.items.length > 0) {
        setUserData(data.items);
      } else {
        setError("No users found with the specified criteria.");
      }
    } catch (error) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }

    setSearchInput("");
    setLocationInput("");
    setMinReposInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        GitHub User Search
      </h1>

      <form
        className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Enter GitHub username"
          className="p-2 border-2 rounded-md w-full focus:outline-none focus:border-blue-400"
        />
        <input
          type="text"
          value={locationInput}
          onChange={handleLocationInputChange}
          placeholder="Enter GitHub location"
          className="p-2 border-2 rounded-md w-full focus:outline-none focus:border-blue-400"
        />
        <input
          type="number"
          value={minReposInput}
          onChange={handleMinReposInputChange}
          placeholder="Enter minimum repository count"
          className="p-2 border-2 rounded-md w-full focus:outline-none focus:border-blue-400"
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md w-full hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {userData && userData.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
          {userData.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                {user.login}
              </h3>
              <p className="text-gray-600 text-center">
                Location: {user.location || "Not available"}
              </p>
              <p className="text-gray-600 text-center">
                Repositories: {user.public_repos}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-500 hover:underline mt-4"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      ) : (
        !loading &&
        error === "" && <p className="mt-4 text-gray-500">No users found.</p>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Search;
