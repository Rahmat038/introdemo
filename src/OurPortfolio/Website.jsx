import React from 'react'
import './Website.css'
import website from '../assets/website screenshot.png'

const Website = () => {
  return (
    <div>
        <img src={website} alt="" />
        <h2>Digital Marketing Agency Webbsite</h2>
        <p>This is a website for a client wants to achieve their goals and meet their <br /> users needs while also increasing their reach accross all platforms. This is a <br /> website rebrand.</p>
    </div>
  )
}

export default Website