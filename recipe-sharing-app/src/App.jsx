import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddRecipeForm />,
  },

  {
    path: "/RecipeDetails/:id",
    element: <RecipeDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
