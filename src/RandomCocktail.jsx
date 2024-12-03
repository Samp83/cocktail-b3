import React, { useState, useEffect } from 'react';

const RandomCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktail = () => {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .then((response) => response.json())
          .then((data) => {
              setCocktails(data.drinks);
          });
  };

  useEffect(() => {
      fetchCocktail();
  }, []);

  if (cocktails.length === 0) {
      return <main>En attente</main>;
  };

  return (
      <main>
          <button onClick={fetchCocktail}>Find a New Cocktail</button>
          {cocktails.map((cocktail) => (
              <div key={cocktail.idDrink}>
                  <h2>{cocktail.strDrink}</h2>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <p>{cocktail.strInstructions}</p>
                  <ul>
                      {Object.keys(cocktail)
                          .filter(key => key.startsWith('strIngredient') && cocktail[key])
                          .map((key, index) => (
                              <li key={index}>
                                  {cocktail[key]} - {cocktail[`strMeasure${index + 1}`]}
                              </li>
                          ))}
                  </ul>
              </div>
          ))}
      </main>
  );
};  

export default RandomCocktails;