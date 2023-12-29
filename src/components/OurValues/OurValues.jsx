import React from 'react'
import './OurValues.css'
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/valueAccordion'
import {Accordion,AccordionItem,AccordionItemButton,AccordionItemHeading,AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";


const OurValues = () => {
  return (
    <section className="ourValues-wrapper">
        <div className="paddings innerWidth flexCenter ourValues-container">
            {/* Left Side */}
            <div className="ourValues-leftPost">
                <div className="img-container">
                    <img src="./our-values.JPG" alt="Our Values Img" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flexColCenter ourValues-right">
                <span className='green-text'>Our Values</span>
                <span className='primaryText'>Values We Offer</span>
                <p className='text-value'>We provides our clients with high-quality, sustainable timber products, 
                <br/> 
                personalized service, reliable delivery with solid expertise in wood-related 
                <br/> 
                solutions for construction, furniture, fittings or manufacturing needs. We 
                <br/> 
                are keen on eco-friendly practices and adherence to industry standards.</p>
            </div>
        </div>
    </section>
  );
};

export default OurValues