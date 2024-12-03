import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ListCocktails from './ListCocktails.jsx'
import './App.css'

function App() {


  return (
    <>
    <Header />

      <div>
      <ListCocktails />
      </div>

    <Footer />
    </>
  )
}

export default App
