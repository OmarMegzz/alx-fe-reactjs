import React from "react";
import { useState } from "react";

function AddRecipeForm({ onRecipeAdd }) {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const validateForm = () => {
    const newErrors = { title: "", ingredients: "", steps: "" };
    let isValid = true;

    if (!recipeTitle) {
      newErrors.title = "Recipe title is required.";
      isValid = false;
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
      isValid = false;
    } else if (
      ingredients.split("\n").filter((ingredient) => ingredient.trim()).length <
      2
    ) {
      newErrors.ingredients = "At least two ingredients are required.";
      isValid = false;
    }
    if (!preparationSteps.trim()) {
      newErrors.steps = "Preparation steps are required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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

      onRecipeAdd(recipeData);

      setIngredients("");
      setPreparationSteps("");
      setRecipeTitle("");
      setErrors({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="font-bold max-w-md mt-8 mx-auto p-4 bg-white rounded shadow-md"
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
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
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
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
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
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
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
