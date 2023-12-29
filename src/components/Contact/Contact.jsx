import React from 'react'
import './Contact.css'
import { MdCall, MdEmail, MdLocationOn, MdWhatsapp } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="contactWrapper">
        <div className="paddings innerWidth flexCenter contactCon">
            {/* Left */}
            <div className="rightContact">
                <div className="img-container">
                    <img src="./connect.png" alt="Contact" />
                </div>
            </div>

            {/* Right*/}
            <div className="flexColStart leftContact">
                <span className='green-text'>Contact Us</span>
                <span className='primaryText'>Get In Touch With a Click</span>
                <span className='secondaryText'>We provide ease of access with a click and make you 
                    benefits good customer service relations</span>

                    {/* Row 1 */}
                    <div className="flexColStart contactTab">
                        <div className="flexStart rw">
                            <div className="flexColCenter tab">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdEmail size={25}/>
                                    </div>
                                    <div className="flexColStart info">
                                        <span className='primaryText'>Email</span>
                                        <span className='secondaryText'>info@woodsns.com</span>
                                        <span className='secondaryText'>nswoodsbe@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="mailto:info@woodsns.com">Send Us A Mail</a>
                                </div>
                            </div>

                            <div className="flexColCenter tab">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart info">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>+2347059373398</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="tel:+2347059373398">Call</a>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className='flexStart rw'>
                            <div className="flexColCenter tab">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdWhatsapp size={25}/>
                                    </div>
                                    <div className="flexColStart info">
                                        <span className='primaryText'>Chat Now</span>
                                        <span className='secondaryText'>+2347059373398</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="https://wa.link/l7v2au">Message Now</a>
                                </div>
                            </div>

                            <div className="flexColCenter tab">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdLocationOn size={25}/>
                                    </div>
                                    <div className="flexColStart info">
                                        <span className='primaryText'>Office Address</span>
                                        <span className='secondaryText'>13, Sunday Gbajobi Drive, Gbagada 100234, Lagos, Nigeria</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    <a href="https://maps.google.com/?q=Millennium+Estate&ftid=0x103b8df96238c9e1:0xf965cbeba70e8079">Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </section>
  )
}

export default Contact