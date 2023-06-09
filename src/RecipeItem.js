import React from "react";

function RecipeItem({ recipe, index, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  const handleDelete = () => {
    deleteRecipe(index);
  };

  return (
    <tr>
      <td>
        <img src={photo} alt={name} />
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;
