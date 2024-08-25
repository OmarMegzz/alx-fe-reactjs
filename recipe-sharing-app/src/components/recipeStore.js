import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRicpe) =>
    set((state) => ({ recipes: [...state.recipes, newRicpe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));

export default useRecipeStore;
