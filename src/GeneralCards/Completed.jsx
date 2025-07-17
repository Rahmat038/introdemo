import React from 'react'
import project from '../assets/project-plan (5).png'
import './completed.css'

const Completed = () => {
  return (
    <div className='completed'>
        <img src={project} alt="" />
        <h3>Completed Projects</h3>
        <h1>100+</h1>
    </div>
  )
}

export default Completed