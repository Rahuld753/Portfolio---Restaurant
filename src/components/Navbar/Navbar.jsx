import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';

import images from '../../constants/images'

const Navbar = () => {
  const [toggleMenu, setToggle] = useState(false)
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app_logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="#book" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-menu'>
        <GiHamburgerMenu color='#fff' className='overlay__open' fontSize={27} onClick={() => setToggle(true)} />
        {toggleMenu &&
          <div className='app__navbar-menu_container flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggle(false)} />
            <ul className='app__navbar-menu-links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
            <div className='app__navbar-menu-login'>
              <a href="#login" className='p__opensans'>Log In / Register</a>
              <a href="#book" className='p__opensans'>Book Table</a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;
