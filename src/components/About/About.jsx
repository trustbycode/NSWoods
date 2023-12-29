import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="aboutUs-wrapper">
        <div className="paddings innerWidth flexCenter aboutUs-container">
            {/* left */}
            <div className="flexColCenter aboutUs-left">
                <span className="green-text">About Us</span>
                <p className='text-about'>NS WOODS is a registered company based in Lagos, Nigeria, dedicated to maximizing
                <br/>
                profitability and backed by an extensive 5year timber industry. Our core competence 
                <br/> 
                lies in the exportation of a diverse range of premium of premium woods varieties,
                <br/>
                including Mitxceisa, Brachystegia, Pipandnestrum, Masouni, Afzelia, Irvgla, Trigoltal,
                <br/>
                Fagahra, Menana, and others. We cater to affluent customers throughout Europe, 
                <br/>
                particularly Belgium.
                <br/>
                As a trusted supplier to a multitude of end users, construction and furniture/fittings 
                <br/> 
                companies throughout Europe and Belgium, we have earned unwavering confidence 
                <br/> 
                through our commitment to responsiveness, integrity and values. Our consistent track 
                <br/>
                record of timely and budget-conscious deliveries has solidified our position as the pre-
                <br/>
                -ferred woods and timbers supplier in the region.
                </p>
            </div>

            {/* right */}
            <div className=" flexColCenter aboutUs-right">
                <div className="img-container">
                    <img src="./about-us.JPG" alt="ABOUT US" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About