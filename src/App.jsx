import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ListCocktails from './ListCocktails.jsx'
import RandomCocktails from './RandomCocktail.jsx'
import './App.css'
import CocktailCard from './CocktailCard.jsx'

function App() {
  const userName = 'Sami'

  return (
    <>
    <Header userName={userName} />
      <div>
      <ListCocktails />
      <RandomCocktails />
      </div>

    <Footer userName={userName}/>
    </>
  )
}

export default App
