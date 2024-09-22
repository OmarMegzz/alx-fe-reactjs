import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import AddRecipeForm from "./AddRecipeForm";
import Koko from "./koko";

function HomePage({ recipes: initialRecipes }) {
  const [recipes, setRecipes] = useState(initialRecipes || []);

  const handleRecipeAdd = (newRecipes) => {
    setRecipes([...recipes, newRecipes]);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <>
      <div className=" max-w-7xl mx-auto p-4 ">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
          {recipes.map((recipe, index) => (
            <li
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105"
              key={recipe.id || index}
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  className="w-full h-48 object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                  <p className="text-gray-700">{recipe.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <AddRecipeForm onRecipeAdd={handleRecipeAdd} />
        <Koko />
      </div>
    </>
  );
}

export default HomePage;
