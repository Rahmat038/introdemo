import React from 'react'
import './Picture.css'
import picture from '../assets/Frame 34.png'

const Picture = () => {
  return (
    <div className='picture'>
      <img src={picture} alt="" />
    </div>
  )
}

export default Picture