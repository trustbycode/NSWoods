import React from 'react'
import './ProductsApp.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import Choose from './components/Choose/Choose'

const ProductsApp = () => {
  return (
    <div className='AppProduct'>
      <div>
        <div className='grade'/>
        <Header/>
        <Hero/>
      </div>
      <Products/>
      <Choose/>
      <Footer/>
    </div>
  )
}

export default ProductsApp