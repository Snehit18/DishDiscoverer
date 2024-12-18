import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeFilter from './components/RecipeFilter';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [calories, setCalories] = useState('');

  const APP_ID = '36d975fd'; 
  const APP_KEY = 'b8e9d222f30ae87ec54b335b14fe86d7'; 

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      setError('Error fetching recipes. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>DishDiscoverer</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} loading={loading} />
      <RecipeFilter calories={calories} setCalories={setCalories} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <RecipeList recipes={recipes} />
      <Footer />
    </div>
  );
};

export default App;