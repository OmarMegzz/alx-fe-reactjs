import { NavLink } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  console.log("Recipes:", recipes);
  return (
    <>
      {recipes.map((recipe) => (
        <NavLink to={`/RecipeDetails/${recipe.id}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </NavLink>
      ))}
    </>
  );
};

export default RecipeList;
