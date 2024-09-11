import React from "react";
import { useState } from "react";

function AddRecipeForm({ onRecipeAdd }) {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipeTitle && ingredients && preparationSteps !== "") {
      const recipeData = {
        id: Date.now(),
        title: recipeTitle,
        ingredients: ingredients
          .split("\n")
          .map((ingredient) => ingredient.trim())
          .filter(Boolean),
        steps: preparationSteps
          .split("\n")
          .map((step) => step.trim())
          .filter(Boolean),
      };
      console.log("🚀 ~ hadnleSubmit ~ recipeData:", recipeData);

      onRecipeAdd(recipeData);

      setIngredients("");
      setPreparationSteps("");
      setRecipeTitle("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mt-8 mx-auto p-4 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title">Recipe title :</label>
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter Your Title Here.."
            type="text"
            id="title"
            value={recipeTitle}
            onChange={(e) => setRecipeTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="label">ingredients</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter Your Ingredients Here.."
          ></textarea>
        </div>
        <div className="addSteps">
          <label htmlFor="label">steps</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="steps"
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
            placeholder="Enter Your Steps Here.."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </>
  );
}

export default AddRecipeForm;
