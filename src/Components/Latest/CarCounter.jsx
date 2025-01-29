import React from 'react'
import './CarCounter.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoSpeedometer } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { GiCarWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import CountUp from 'react-countup';
import './Latest.css'

const CarCounter = ({powerEnd, speedEnd, wheelEnd}) => {

  console.log("powerEnd:", powerEnd);
  console.log("speedEnd:", speedEnd);
  console.log("wheelEnd:", wheelEnd);


  const carCounterArray = [
    {
      img: <ImPower/>,
      start: 0,
      end: powerEnd,
      duration: 4,
      text: "Horsepower"
    },
    {
      img: <IoSpeedometer/>,
      start: 300,
      end: speedEnd,
      duration: 4,
      text: "Top Speed"
    },
    {
      img: <GiCarWheel/>,
      start: 0,
      end: wheelEnd,
      duration: 4,
      text: "Wheelbase"
    },
    // {
    //   img: <BsFillFuelPumpFill/>,
    //   end: 18,
    //   duration: 3,
    //   text: "Fuel Tank Capacity"
    // }
]

  return (
    
    <div className="car-counter-section">
    {
            carCounterArray.map( (obj) => {
              return(
                <>
                <Col className='counter-container' lg={3} md={6}>

                  <span className="icon">{obj.img} </span>
                                
                  <div className="counter my-5">              
                    <span><CountUp start={obj.start} end={obj.end} duration={obj.duration} /></span>
                    <p>{obj.text}</p>
                  </div>
                </Col>

                </>
              )
            })
          }
    </div>

  )
}

export default CarCounter