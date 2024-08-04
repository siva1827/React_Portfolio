import React from 'react'
import Header from './components/header/Header'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Experience from './components/Experience/Experience'
 import Portfolio from './components/portfolio/Portfolio'


const App = ()=> {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>  
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App