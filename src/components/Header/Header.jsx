import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import './Header.css'
import OutsideClickHandler from 'react-outside-click-handler'


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened)=> {
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "-100%"}
    }
  }

  return (
    <section className="header-wrapper">
        <div className="flexCenter paddings innerWidth header-container">
            <img src="./nslogo.png" alt="NS Woods LOGO" width={100} />

            <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
            <div className="flexCenter header-menu" style={getMenuStyles (menuOpened)}>
              
                <a href="/">Home</a>
                <a href="/products.html">Our Products</a>
                <a href="/about-us.html">About Us</a>
                <a href="/contact.html">Contact Us</a>
                {/* <button className='button'>
                    <a href="/contact.html">Contact</a>
                </button> */}
            </div>
            </OutsideClickHandler>

            <div className= "nav-icon" onClick= {()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
        
    </section>
  )
  
}

export default Header