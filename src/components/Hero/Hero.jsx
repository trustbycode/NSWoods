import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hr-wrapper">
        <div className="paddings flexCenter innerWidth hr-container">

            <div className="flexColStart hr-left">
                <div className="hr-title">
                    <div className="green-circle"/>
                    <motion.h1 initial={{y: "2rem", opacity: 0}} animate={{y: 0, opacity: 1}}
                    transition={{duration: 2, type: "spring"}}>Best Selling <br/>
                        Timbers and Woods <br/>
                        Reserve
                    </motion.h1>
                </div>

                <div className="flexColStart hr-description">
                    <span className='secondaryText'>We offer the best prices and services to  
                    </span>
                    <span className='secondaryText'>organizations as the best timber and wood supplier in Europe</span>
                </div>

                {/* Stats Record */}
                <div className="flexCenter statistics">
                    
                    <div className="flexColCenter stats">
                        <span>
                            <CountUp start={2} end={20} duration={4} />
                            <span>+</span>
                            </span>
                        <span className='secondaryText'>
                            Timber Products
                        </span>
                    </div>
                    
                    <div className="flexColCenter stats">
                        <span>
                            <CountUp start={0} end={25} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Companies Supllied
                        </span>
                    </div>
                    <div className="flexColCenter stats">
                        <span>
                            <CountUp end={1} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                        Continent Shipped To
                        </span>
                    </div>
                </div>
            </div>

            <div className="flexCenter hr-right">
                <motion.div className="img-container" initial={{x: "7rem", opacity: 0}} animate={{x: 0, opacity: 1}}
                transition={{duration: 2, type: "spring"}}>
                    <img src="./superba2.png" alt="Display Image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero