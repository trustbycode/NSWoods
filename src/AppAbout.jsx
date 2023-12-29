import React from 'react'
import './AppAbout.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OurValues from './components/OurValues/OurValues'
import Footer from './components/Footer/Footer'
import Choose from './components/Choose/Choose'
import About from './components/About/About'

const AppAbout = () => {
  return (
    <div className='AppAbout'>
        <div>
            <div className='grade'/>
            <Header/>
            <Hero/>
        </div>
        <About/>
        <Choose/>
        <OurValues/>
        <Footer/>
    </div>
  )
}

export default AppAbout