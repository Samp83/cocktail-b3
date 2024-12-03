import React, { useState, useEffect } from 'react';
const ListCocktails = () => {
      const [cocktails, setCocktails] = useState([]);

      useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=e')
          .then((response) => response.json())
          .then((data) => {
            setCocktails(data.drinks);
          });
      }, []);

      if (cocktails.length === 0) {
        return <main>En attente</main>;
      };

      return (
        <main>
          {cocktails.slice(0, 10).map((cocktail) => (
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

export default ListCocktails;