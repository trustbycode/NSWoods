import React from 'react'
import './Choose.css'
// import data from '../../utils/choose.json'
// import {sliderSettings} from "../../utils/common"
const Choose = () => {
  return (
    <section className="choose-wrapper">
        <div className="paddings innerWidth flexCenter">
            <span className='green-text'>Our Services</span>
        </div>

        <div className="paddings innerWidth flexCenter choose-container">
            
            <img src="./europe-ship.PNG" alt="EU Shipping" />
            <img src="./best-qual.PNG" alt="Best Quality" />
            <img src="./secured-pay.PNG" alt="Secured Payment" />
            <img src="./best-of.PNG" alt="Best Offer" />
        </div>
    </section>
  )
}

export default Choose