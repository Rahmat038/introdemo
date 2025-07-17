import React from 'react'
import './Web.css'
import logo from '../assets/WEB LOGO.png'
import face from '../assets/Group 32 (1).png'
import tweet from '../assets/Group 33.png'
import lock from '../assets/Group 34.png'
import insta from '../assets/Frame 20095.png'

const Web = () => {
  return (
    <div className='down'>
       <img src={logo} alt="" />
       <p>Some people text about the <br /> agency. just a little discription to <br /> help people understand you better</p>
       <div className='logos'>
        <img src={face} alt="" />
        <img src={tweet} alt="" />
        <img src={lock} alt="" />
        <img src={insta} alt="" />
       </div>
       <h3>Copyright Design Agency 2022</h3>
    </div>
  )
}

export default Web