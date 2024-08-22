import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRicpe) =>
    set((state) => ({ recipes: [...state.recipes, newRicpe] })),
  setRicpes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
