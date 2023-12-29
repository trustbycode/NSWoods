import React from 'react'
import './AppContact.css'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

const AppContact = () => {
  return (
    <div className='AppContact'>
        <div>
            <div className='grade'/>
            <Header/>
            <Hero/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default AppContact