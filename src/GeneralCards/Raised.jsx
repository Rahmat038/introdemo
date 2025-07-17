import React from 'react'
import raised from '../assets/raise (1).png'
import './raised.css'

const Raised = () => {
  return (
    <div className='raised'>
      <img src={raised} alt="" />
      <h3>Raised by Clients</h3>
      <h1>$10M</h1>
    </div>
  )
}

export default Raised