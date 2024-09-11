import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => (
  <div className="recipes">
    {recipes.length > 0 ? (
      recipes.map((item, index) => (
        <RecipeCard key={index} recipe={item.recipe} />
      ))
    ) : (
      <p>No recipes found.</p>
    )}
  </div>
);

export default RecipeList;
