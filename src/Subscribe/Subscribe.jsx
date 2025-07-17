import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='good'>
        <h3>SUBSCRIBE</h3>
        <h1>Subscribe To Get The Latest <br /> News About Us</h1> 
        <p>Please Drop Your Email Below To Get Daily Updates About What We Do</p>
        <div className='input'>
            <input type="text" placeholder='Enter Your Email Address' required/> 
            <button type='submit'>Subscribe</button>
            
        </div>
    </div>
  )
}

export default Subscribe