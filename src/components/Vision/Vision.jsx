import React from 'react'
import './Vision.css'

const Vision = () => {
  return (
    <section className="visionWrapper">
        <div className="paddings innerWidth flexCenter visionContainer">
            {/* Left */}
            <div className='flexColCenter visionLeft'>
                <span className='green-text'>Our Vision</span>
                <span className='primaryText'>Ride With Us</span>
                <span className='text-vision'>
                    Our vision is to consistently deliver premium-grade timber, tailored to meet the discerning
                    <br/>
                    preferences of our esteemed clients. We aspire to forge a lucrative and enduring presence
                    <br/>
                    in the wood and timber industry, achieving sustainable growth through astute investments in
                    <br/>
                    cutting edge technology and conscientious management practices. Our commitment extends 
                    <br/>
                    beyond profitability, fostering a secure and nurturing workplace environment that empowers
                    <br/>
                    our team to excel and cultivate gratifying careers. We are dedicated to the cultivation of 
                    <br/>
                    sustainable forests, and our pledge to responsible forest management underscores
                    <br />
                    our commitment to both environmental stewardship and community enrichment.
                </span>
            </div>
            

            {/* Right */}
            <div className=" flexColCenter visionRight">
                <div className="img-container">
                    <img src="./vvi.png" alt="Our Values Img" />
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Vision