import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.tittle}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </>
  );
};

export default RecipeList;

/*const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
*/
