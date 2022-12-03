import React from 'react'
import northernPic from '../assets/northern-hemisphere.png'
import southernPic from '../assets/southern-hemisphere.png'

export default function hemispheredisplay({ latitude }) { // ES 2015 Deconstruction Syntax
  const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere'
  const picture = latitude > 0 ? northernPic : southernPic

  return(
    <div>
      <img src={picture} alt={hemisphere} />
      You are in the {hemisphere}
    </div>
  )
}
