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
      />
    </div>
  );
};

export default RecipeFilter;
