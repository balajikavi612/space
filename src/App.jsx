import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Products/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App