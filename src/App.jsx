import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Technology from './Components/Technology/Technology'
import Project from './Components/Projects/Project'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Technology />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App