import React from 'react';

// {title, calories, image, ingredients} are basically props
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories} cal</p>
            <img src={image}/>
            <ul>
                {ingredients.map(ingredients => (
                   <li>{ingredients.text}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Recipe;