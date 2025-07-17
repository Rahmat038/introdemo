import React from 'react'
import './Marketing.css'
import marketing from '../assets/marketing screenshot.png'

const Marketing = () => {
  return (
    <div>
        <img src={marketing} alt="" />
        <h2>Digital Marketing Agency Webbsite</h2>
        <p>This is a website for a client wants to achieve their goals and meet their <br /> users needs while also increasing their reach accross all platforms. This is a <br /> website rebrand.</p>
    </div>
  )
}

export default Marketing