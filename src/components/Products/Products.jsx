import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Products.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/slide';

const Products = () => {
  return (
    <section  className='products-wrapper'>
        <div className='paddings innerWidth products-container'>
            <div className="products-header flexColStart">
                <span className='green-text'>Our Products</span>
                <span className='primaryText'>Woods and Timbers</span>
            </div>

            {/* Carousel */}
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart products-card">
                                <img src={card.image} alt="image-home" />

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.info}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Products

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="flexCenter products-button">
            <button onClick={()=> swiper.slidePrev()}>&larr;</button>
            <button onClick={()=> swiper.slideNext()}>&rarr;</button>
        </div>
    )
}