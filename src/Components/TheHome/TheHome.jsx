import React from 'react'
import ExCarousel from '../Carousel/ExCarousel'
import Thoughts from '../Thoughts/Thoughts'
import ExCounter from '../Counter/ExCounter'
import TheHistory from '../TheHistory/TheHistory'


const TheHome = () => {
  return (
    <>
        <ExCarousel />
        <Thoughts />
        <ExCounter />
        <TheHistory />
    </>
  )
}

export default TheHome