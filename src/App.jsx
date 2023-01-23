import React from 'react'
import Header from './components/header/Header'
import NavBar from './components/navbar/NavBar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Favicon from 'react-favicon'
import Icon from './assets/favicon.ico'
import './index.css'

const App = () => {
  return (
    <>
      <Favicon url={Icon} />
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App