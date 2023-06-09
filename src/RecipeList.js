import React from "react";

function RecipeList({ addRecipe, recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th id="name-header">Name</th>
            <th id="cuisine-header">Cuisine</th>
            <th id="photo-header">Photo</th>
            <th id="ingredients-header">Ingredients</th>
            <th id="preparation-header">Preparation</th>
            <th id="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}>
              <td headers="name-header">{recipe.name}</td>
              <td headers="cuisine-header">{recipe.cuisine}</td>
              <td headers="photo-header">
                <img
                  src={recipe.photo}
                  alt={recipe.name}
                  width="100"
                  height="100"
                  style={{ objectFit: 'scale-down' }}
                />
              </td>
              <td headers="ingredients-header" className="content_td">
                <p>{recipe.ingredients}</p>
              </td>
              <td headers="preparation-header" className="content_td">
                <p>{recipe.preparation}</p>
              </td>
              <td headers="actions-header">
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

