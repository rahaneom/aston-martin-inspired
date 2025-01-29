import React from 'react'
import TheDiscover from '../TheDiscover/TheDiscover'
import Latest from '../Latest/Latest'
import Offers from '../Offer/Offers'

const DiscoverSection = () => {
  return (
    <div>
        <TheDiscover 
          para = "Explore"
          heading = "Aston Martin"
        />
        <Latest />
        <Offers />
    </div>
  )
}

export default DiscoverSection