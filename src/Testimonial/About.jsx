import React from 'react'
import './About.css'
import Emily from './Emily'
import Stone from './Stone'
import Guru from './Guru'
import Testimonials from './Testimonials'
import Picture from './Picture'

const About = () => {
  return (
    <div className='all'>
      <div className='great'>
      <Testimonials />
      <Picture />
</div>
<div className='group'>
        <Emily />
        <Stone />
        <Guru />
        </div>
    </div>
  )
}

export default About