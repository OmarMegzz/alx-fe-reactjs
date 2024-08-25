import React from "react";
import useRecipeStore from "./recipeStore";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useRecipeStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search recipes..."
      />
    </>
  );
}

export default SearchBar;
