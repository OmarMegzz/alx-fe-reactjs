import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

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
        <ul className="flex flex-wrap gap-6 justify-center  ">
          {recipes.map((recipe) => (
            <li
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105"
              key={recipe.id}
            >
              <img
                className="w-full h-48 object-cover"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
