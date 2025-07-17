import React from 'react'
import google from '../assets/logos_google.png'
import trello from '../assets/Trello-logo-blue 1.png'
import monday from '../assets/logos_monday.png'
import notion from '../assets/Notion.png'
import slack from '../assets/Slack.png'
import './Minifooter.css';

const MiniFooter = () => {
  return (
    <div className='logos'>
      <img src={google} alt="" />
      <img src={trello} alt="" />
       <img src={monday} alt="" />
      <img src={notion} alt="" />
      <img src={slack} alt="" />
     
    </div>
  )
}

export default MiniFooter