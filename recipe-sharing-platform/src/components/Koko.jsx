import React from "react";

function Koko({ recipeTitle, ingredients, preparationSteps }) {
  return (
    <>
      <h1>{recipeTitle}</h1>
      <h1>{ingredients}</h1>
      <h1>{preparationSteps}</h1>
    </>
  );
}

export default Koko;
