import React from 'react'
import './Thoughts.css'
import smokeyCarVideo from '../../assets/smoky-car.mp4';

const Thoughts = () => {
  return (
    <div className='thoughts'>
      <video  loop autoPlay muted className='video-background'>
        <source src={smokeyCarVideo} type='video/mp4' />
      </video>
      <div className="thought-container">
        
      <p className='thought-text'>We have an unstoppable quest for profound gratification. A desire to capture the pure human emotion of the driving experience.</p>

      <p className='thoughts-by'> 
        <hr />  
        <span>ASTON MARTIN</span>
      </p>
      </div>
    </div>
  )
}

export default Thoughts