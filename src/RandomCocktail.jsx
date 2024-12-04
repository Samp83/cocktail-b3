import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';

const RandomCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    const fetchCocktail = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setCocktails(data.drinks);
    };

    useEffect(() => {
        fetchCocktail();
    }, []);

    if (cocktails.length === 0) {
        return <main>En attente</main>;
    };

    return (
        <main>
            <button onClick={fetchCocktail}>Find a new random cocktail</button>
            {cocktails.map((cocktail) => (
                <CocktailCard cocktail={cocktail} />
            ))}
        </main>
    );
};

export default RandomCocktails;