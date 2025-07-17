import React from 'react'
import WhatWeDo from './WhatWeDo'
import Grow from './Grow'
import Improve from './Improve'
import Model from './Model'
import './General.css'

const General = () => {
  return (
    <div className='what'>
        <WhatWeDo />
        <div className='cards'>
        <Grow />
        <Improve />
        <Model />
        </div>
    </div>
  )
}

export default General