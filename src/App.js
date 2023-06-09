import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };
  const deleteRecipe = (index) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes];
      updatedRecipes.splice(index, 1);
      return updatedRecipes;
    });
  };

  return (
    <div className="App">
      <header>
        <h1
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontSize: "64px",
            textAlign: "center",
          }}
        >
          Delicious Food Recipes
        </h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
