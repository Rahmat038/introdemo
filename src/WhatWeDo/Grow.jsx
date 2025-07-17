import React from 'react'
import Activity from '../assets/Activity.png'
import Vector from '../assets/Vector (1).png'
import './Grow.css'

const grow = () => {
  return (
    <div className='grow'>
        <img src={Activity} alt="" />
        <h3>Grow Your Business</h3>
         <p>We help you identify the best way to <br /> improve your business</p>
         <div className='span'>
           <span>Learn More</span> <img src={Vector} alt="" />
           </div>
    </div>
  )
}

export default grow