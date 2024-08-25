import React, { useEffect, useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore((state) => ({
    updateRecipe: state.updateRecipe,
  }));

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]); // Update state when recipe prop changes

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recipe?.id) {
      updateRecipe(recipe.id, { title, description });
      console.log("Recipe updated:", { title, description }); // Debugging output
    } else {
      console.error("Recipe ID is undefined");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
    </>
  );
};

export default EditRecipeForm;
