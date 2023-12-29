import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'

import Choose from './components/Choose/Choose'
import Products from './components/Products/Products'
import OurValues from './components/OurValues/OurValues'
import Vision from './components/Vision/Vision'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

const App = () => {
  return (
    <div className='App'>
      <div>
        <div className="gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Products/>
      {/* <About/> */}
      <OurValues/>
      <Choose/>
      <Vision/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App