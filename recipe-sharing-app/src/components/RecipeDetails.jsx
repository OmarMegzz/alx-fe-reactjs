import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import { useEffect } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id.toString() === id)
  );
  useEffect(() => {
    console.log("Recipe details updated:", recipe); // Debugging output
  }, [recipe]);

  return (
    <div>
      <h2>RecipeDetails</h2>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
