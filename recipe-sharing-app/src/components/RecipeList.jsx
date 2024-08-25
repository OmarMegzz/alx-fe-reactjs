import React, { useEffect } from "react"; // Import React and useEffect
import { NavLink } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  // Access filteredRecipes and other necessary state/actions from the store
  const { filteredRecipes, searchTerm, filterRecipes } = useRecipeStore(
    (state) => ({
      filteredRecipes: state.filteredRecipes,
      searchTerm: state.searchTerm,
      filterRecipes: state.filterRecipes,
    })
  );

  useEffect(() => {
    // Trigger filtering when searchTerm changes
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  // Handle the case where there are no filtered recipes
  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <NavLink
          to={`/RecipeDetails/${recipe.id}`}
          key={recipe.id}
          className="recipe-item"
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default RecipeList;
