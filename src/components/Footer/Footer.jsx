import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer-wrap">
        <div className="paddings innerWidth flexCenter footCon">
            {/* left */}
            <div className="flexColStart left-footer">
                <img src="./nslogo.png" alt="NS WOODS LOGO" width={150}/>
                    <span className='secondaryText spann'>
                    We offer the best prices and services to 
                    <br />
                    individuals And businesses. We believe in 
                    <br />
                    reciprocal respect and aim to meet our customers' expectations by delivering
                    <br/>
                    Satisfactory services
                    </span>
            </div>

            <div className="flexColStart right-footer">
                <span className='primaryText'>Office Address</span>
                <span className='secondaryText'>13, Sunday Gbajobi Drive, Gbagada 100234, Lagos, Nigeria</span>

                {/* <div className="flexCenter menuFooter">
                    <span><a href="/">Home</a></span>
                    <span><a href="/products.html">Products</a></span>
                    <span><a href="/about-us.html">About Us</a></span>
                    <span><a href="/contact.html">Contact Us</a></span>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Footer