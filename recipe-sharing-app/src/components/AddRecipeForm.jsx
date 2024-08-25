import { useState } from "react";
import useRecipeStore from "./recipeStore";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

export const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
      <RecipeList />
    </>
  );
};

export default AddRecipeForm;
