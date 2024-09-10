import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { useEffect, useState } from "react";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
