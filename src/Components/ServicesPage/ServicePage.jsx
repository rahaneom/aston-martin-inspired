import React from 'react'
import ServiceCover from './ServiceCover'
import Latest from '../Latest/Latest'
import TheDiscover from '../TheDiscover/TheDiscover'
import TheService from './TheService'
import ServiceCarousel from './ServiceCarousel'

const ServicePage = () => {
  return (
    <>
        <ServiceCover />
        <TheService />
        <ServiceCarousel />
        
    </>
  )
}

export default ServicePage