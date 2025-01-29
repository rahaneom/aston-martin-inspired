import React, { useState } from 'react';
import car1 from '../assets/car1.webp';
import car2 from '../assets/car2.jpeg';
import car3 from '../assets/car3.webp';
import car4 from '../assets/car4.webp';
import '../Components/Carousel/ExCarousel.css'

const ExampleCarouselImage = (props) => {

  return (
    <>
        {/* <img src={props.src} className='carousel-img'/> */}
        <video autoPlay loop muted  className='carousel-video'>
        <source src={props.src} type='video/mp4' />
        {/* You can add additional source tags for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

    </>
  )
}

export default ExampleCarouselImage