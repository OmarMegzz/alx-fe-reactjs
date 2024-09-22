import axios from "axios";

export const fetchUserData = async (
  username = "",
  location = "",
  minRepos = ""
) => {
  try {
    // Build the query string with provided parameters
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    // Trim trailing spaces from the query
    query = query.trim();

    // Fetch user data from the GitHub Search API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    return response.data; // Returning full data, including items
  } catch (error) {
    throw new Error("Looks like we can't find the user.");
  }
};
