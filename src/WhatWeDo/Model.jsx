import React from 'react'
import work from '../assets/Work.png'
import vector from '../assets/Vector (1).png'
import './Model.css'

const Model = () => {
  return (
    <div className='model'>
      <img src={work} alt="" />
      <h3>Improve Business Model </h3>
      <p>We help identify the best way to <br /> improve business</p>
      <div className='span'>
        <span>Learn More</span> <img src={vector} alt="" />
        </div>
      
    </div>
  )
}

export default Model