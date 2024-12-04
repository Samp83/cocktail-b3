import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
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
            <CocktailCard cocktail={cocktail} />
          ))}
        </main>
      );
};  

export default ListCocktails;