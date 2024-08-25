import React from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  const handleDelete = () => {
    if (recipeId) {
      deleteRecipe(recipeId);
      navigate("/");
      console.log(`Deleting recipe with id: ${recipeId}`);
    } else {
      console.error("Recipe ID is undefined");
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
