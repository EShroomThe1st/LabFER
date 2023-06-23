import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FilmPresentation from './Components/FilmPresentation/FilmPresentation'
import styles from "./App.module.css"

const App = () => {
  return (
    <div style={{ backgroundColor: "#494949"}}>
      <Header/>
      <FilmPresentation/>
      <Footer/>
    </div>
  )
}

export default App