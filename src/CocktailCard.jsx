const CocktailCard = ({cocktail}) =>{

    return (
        
        <article key={cocktail.idDrink}>
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
        </article>
    )

}

export default CocktailCard;