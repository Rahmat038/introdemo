import React from 'react'
import Heart from '../assets/Heart.png'
import vector from '../assets/Vector (1).png'
import './Improve.css'

const Improve = () => {
  return (
    <div className='Improve'>
<img src={Heart} alt="" />
<h3>Improve brand loyalty</h3>
<p>We help identify the best way to <br />improve your business</p>
<div className='span'>
  <span>Learn More</span> <img src={vector} alt="" />
  </div>

    </div>
  )
}

export default Improve