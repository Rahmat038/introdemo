import React from 'react'
import './Business.css'
import Portfolio from './Portfolio'
import Agency from './Agency'
import Digital from './Digital'
import Marketing from './Marketing'
import Website from './Website'


const Business = () => {
  return (
    <div className='whole'>
        <Portfolio />
        <div className='up'>
        <Digital />
        <Marketing />
        </div>
        <div className='down'>
        <Agency />
        <Website />
        </div>
    </div>
  )
}

export default Business