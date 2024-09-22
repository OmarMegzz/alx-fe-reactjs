import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { useEffect, useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import Koko from "./components/koko";

function App() {
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
      <Router>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetail recipes={recipes} />}
          />
          <Route path="/addRecipeForm" element={<AddRecipeForm />} />
          <Route path="/koko" element={<Koko recipe={{ title: "lolo" }} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
