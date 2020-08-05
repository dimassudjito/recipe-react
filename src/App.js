import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  // ID and KEY to access the Edamam API
  const APP_ID = "eaf0960d";
  const APP_KEY = "e9564b66be72068e54cfe70cf34948df";

  // State that stores the recipe
  // useState is used to assign the data to the state
  const [recipes, setRecipes] = useState([]);
  // State that stores what user is searching
  const[search, setSearch] = useState('');
  // State for the submit button
  const[query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query ])

  // Function to fetch API that is used in useEffect
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // Function to change the search state according to the input form
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  
  const getSearch = e => {
    // Prevent the page from refreshing
    e.preventDefault();
    // Set query value to search value
    setQuery(search);
    // Set search to blank again after submit button
    setSearch('');
  }

  return (
    <div className="App">
      {/* Form to search for recipe */}
      <form onSubmit={getSearch} className="search-form">
        {/* value={search} connect it to the state */}
        {/* onChange={} change the search state */}
        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch}>
        </input>
        <button className="search-button" type="submit">Search</button>
      </form>
      
      <div className="recipes">
      {/* Calling the Recipe component by mapping the API object */}
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
