import React from 'react';

const RecipeFilter = ({ calories, setCalories }) => {
  return (
    <div className="filter">
      <label htmlFor="calories">Max Calories:</label>
      <input
        type="number"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Enter max calories"
      />
    </div>
  );
};

export default RecipeFilter;
