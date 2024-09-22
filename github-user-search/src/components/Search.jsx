// import React, { useState } from "react";
// import { fetchUserData } from "../services/githubService";

// const Search = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [locationInput, setLocationInput] = useState("");
//   const [minReposInput, setminReposInput] = useState("");
//   const [userData, setUserData] = useState(null); // For storing user data
//   const [loading, setLoading] = useState(false); // For loading state
//   const [error, setError] = useState(""); // For error state

//   const handleSearchInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };
//   const handleLocationInputChange = (e) => {
//     setLocationInput(e.target.value);
//   };
//   const handleMinReposInputChange = (e) => {
//     setminReposInput(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setUserData(null);
//     try {
//       const data = await fetchUserData(
//         searchInput,
//         locationInput,
//         minReposInput
//       );
//       if (data.items && data.items.length > 0) {
//         setUserData(data.items);
//       } else {
//         setError("No users found with the specified criteria.");
//       }
//     } catch (error) {
//       setError("Looks like we cant find the user");
//     } finally {
//       setLoading(false);
//     }
//     setSearchInput("");
//     setLocationInput("");
//     setminReposInput("");
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//           placeholder="Enter GitHub username"
//         />
//         <input
//           type="text"
//           value={locationInput}
//           onChange={handleLocationInputChange}
//           placeholder="Enter GitHub location"
//         />
//         <input
//           type="text"
//           value={minReposInput}
//           onChange={handleMinReposInputChange}
//           placeholder="Enter GitHub repos count"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {loading && <p>Loading...</p>}

//       {userData && userData.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {userData.map((user) => (
//             <div key={user.id} className="border p-4 rounded shadow">
//               <img
//                 src={user.avatar_url}
//                 alt={user.login}
//                 className="w-20 h-20 rounded-full"
//               />
//               <h3 className="text-lg font-semibold">{user.login}</h3>
//               <p>Location: {user.location || "Not available"}</p>
//               <p>Repositories: {user.public_repos}</p>
//               <a
//                 href={user.html_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 underline"
//               >
//                 View GitHub Profile
//               </a>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No users found.</p>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </>
//   );
// };

// export default Search;
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Enter GitHub username"
        />
        <input
          type="text"
          value={locationInput}
          onChange={handleLocationInputChange}
          placeholder="Enter GitHub location"
        />
        <input
          type="number"
          value={minReposInput}
          onChange={handleMinReposInputChange}
          placeholder="Enter minimum repository count"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {userData && userData.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {userData.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full"
              />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <p>Location: {user.location || "Not available"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p>No users found.</p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Search;
