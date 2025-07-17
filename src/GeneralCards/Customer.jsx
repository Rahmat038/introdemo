import React from 'react'
import rating from '../assets/rating (1).png'
import './customer.css'

const Customer = () => {
  return (
    <div className='customer'>
      <img src={rating} alt="" />
      <h3>Customer Satisfaction</h3>
      <h1>20%</h1>
    </div>
  )
}

export default Customer