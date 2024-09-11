import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetail() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
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
            {recipe.instructions.map((ingredients, index) => (
              <li key={index} className="text-gray-600">
                {ingredients}
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
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
