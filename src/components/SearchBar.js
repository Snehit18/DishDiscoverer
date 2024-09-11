import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch, loading }) => (
  <div>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for recipes..."
    />
    <button onClick={handleSearch} disabled={loading}>
      {loading ? 'Searching...' : 'Search'}
    </button>
  </div>
);

export default SearchBar;
