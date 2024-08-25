import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
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
/* const router = createBrowserRouter([
    {
      path: "/",
      element: <AddRecipeForm />, // The main component for the root path
    },
    {
      path: "/RecipeDetails/:id", // Route for recipe details with dynamic id
      element: <RecipeDetails />,
    },
  ]);*/

export default App;
