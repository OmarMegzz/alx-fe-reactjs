import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetail({ recipes }) {
  console.log("🚀 ~ RecipeDetail ~ recipes:", recipes);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!recipes || recipes.length === 0) {
    return <div>Loading...</div>;
  }
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center items-center flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Cooking Steps</h2>
          <ol className="list-decimal list-inside text-gray-600">
            {recipe.steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
        <button
          onClick={() => navigate("/")}
          className=" bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
