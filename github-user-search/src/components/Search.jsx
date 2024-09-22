import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(searchInput);
    }
    setSearchInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
