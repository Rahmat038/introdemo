import React from 'react'
import Completed from './Completed'
import Customer from './Customer'
import Raised from './Raised'
import Years from './Years'
import './cards.css'

const Cards = () => {
  return (
    <div className='minicards'>
        <Completed />
        <Customer />
        <Raised />
        <Years />
    </div>
  )
}

export default Cards