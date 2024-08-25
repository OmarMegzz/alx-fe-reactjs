import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRicpe) =>
    set((state) => ({ recipes: [...state.recipes, newRicpe] })),
  setRecipes: (recipes) => set({ recipes }),
  // deleteRecipe: () => set((state) => ({ recipes: "" })),
  // updateRecipe: () => set((state) => ({ recipes: state.updateRecipe })),
}));

export default useRecipeStore;
