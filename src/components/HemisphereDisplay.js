import React from 'react'

// CSS
import './HemisphereDisplay.css'

// ASSETS
import northernPic from '../assets/northern-hemisphere.png'
import southernPic from '../assets/southern-hemisphere.png'

const hemisphereConfig = {
  Northern: {
    text: 'You are in the Northern Hemisphere',
    picture: northernPic
  },
  Southern: {
    text: 'You are in the Southern Hemisphere',
    picture: southernPic
  }
}

export default function hemispheredisplay({ latitude }) { // ES 2015 Deconstruction Syntax
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
  const {text, picture} = hemisphereConfig[hemisphere]

  return(
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={picture} alt={hemisphere} className='picture'/>
        </div>
        <div className='ui bottom attached label'>
          <h1 className='hemisphereText'>{text}</h1>
        </div>
      </div>
    </div>
  )
}
