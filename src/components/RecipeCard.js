import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="recipe">
    <h2>{recipe.label}</h2>
    <img src={recipe.image} alt={recipe.label} />
    <p>Calories: {Math.round(recipe.calories)}</p>
    <a href={recipe.url} target="_blank" rel="noopener noreferrer">
      View Recipe
    </a>
  </div>
);

export default RecipeCard;
