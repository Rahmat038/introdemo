import React from 'react'
import './Header.css';
import Logo from '../assets/Frame 8.png'

const Header = () => {
  return (
    <header>
        <div className='header-cont'>
            <img src={Logo} alte='' />
            <div className='header-left-side'>
              <nav>
                <ul>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
              </nav>
              <button className='button'>Login</button>
              <button className='buttom'>Register</button>
            </div>

        </div>
    </header>
  )
}

export default Header