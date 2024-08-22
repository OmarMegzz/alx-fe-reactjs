import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRicpe) =>
    set((state) => ({ recipes: [...state.recipes, newRicpe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
