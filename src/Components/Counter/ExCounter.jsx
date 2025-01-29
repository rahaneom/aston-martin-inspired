import React from 'react'
import './ExCounter.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GiRaceCar } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { GoMilestone } from "react-icons/go";
import { PiEngine } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { MdLocalGasStation } from "react-icons/md";
import { GiPodium } from "react-icons/gi";
import CountUp from 'react-countup';

const ExCounter = () => {

  const counterArray = [
    {
      img: <GiTrophyCup/>,
      end: 8,
      duration: 5,
      text: "Car Realm Experience"
    },
    {
      img: <PiFlagCheckeredFill/>,
      end: 25,
      duration: 4,
      text: "Fastest Lap Recorded"
    },
    {
      img: <GiPodium/>,
      end: 100,
      duration: 2,
      text: "Racing Podium Finishes"
    },
    {
      img: <MdLocalGasStation/>,
      end: 65,
      duration: 3,
      text: "Auto Station Worldwide"
    }
  ]

  return (
    <Container fluid className='counter-section'>

        <Row className='counter-title'>
          <Col lg={12}>
            <h1>Automotive Success</h1>
            <p className='w-lg-50'>The Road Traveled: A Journey Through Our Automotive Achievements, Shaped by Innovation, Dedication, and a Passion for Excellence</p>
          </Col>
        {/* </Row> */}
        
        {/* <Row > */}
              {
                counterArray.map( (obj) => {
                  return(
                    <>
                    <Col className='counter-container' lg={3} md={6}>

                      <span className="icon">{obj.img} </span>
                                    
                      <div className="counter my-5">              
                        <span><CountUp start={0} end={obj.end} duration={obj.duration} />+</span>
                        <p>{obj.text}</p>
                      </div>
                    </Col>

                    </>
                  )
                })
              }
        </Row>

    </Container>
  )
}

export default ExCounter