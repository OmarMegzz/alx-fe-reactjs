import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddRecipeForm />,
    },
    {
      path: "/RecipeDetails/:id", // Route for recipe details with dynamic id
      element: <RecipeDetails />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
