import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './Latest.css';
import latest_vid1 from '../../assets/aston-vid9.mp4'
import latest_vid2 from '../../assets/aston-vid6.mp4'
import latest_vid3 from '../../assets/aston-vid10.mp4'
import latest_vid4 from '../../assets/aston-vid7.mp4'
import CarCounter from './CarCounter';
import { IoSpeedometer } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { GiCarWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";

const carCounterArray = [
    {
      img: <ImPower/>,
      start: 0,
      end: 300,
      duration: 4,
      text: "Horsepower"
    },
    {
      img: <IoSpeedometer/>,
      start: 300,
      end: 155,
      duration: 4,
      text: "Top Speed"
    },
    {
      img: <GiCarWheel/>,
      start: 0,
      end: 110,
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

const Latest = () => {
  return (
    <Container fluid>

        
      <Row className='latest-section'>
        <Col lg={6} sm={12} md={12}>

          {/* <img src={latest_car} className='latest-img'/> */}
          <video autoPlay loop muted className='latest-video'>
            <source src={latest_vid1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

        </Col>

        <Col lg={6} sm={12} md={12}>

          <div className="latest-text-container">
            <span>Introducing The All New<h2 className='latest-title'>Aston Martin DB-12</h2></span>
            <p className='latest-text'>DB12. Redefining and reinventing what it means to be a tourer. An icon risen from 73 years of category defining marvels. Cutting through continents and taming tradition.
            </p>

            {/* <p className='latest-text'>Pulsing with connected technology. Wrapping every corner in hand-stitched hedonism and swelling every sense with state-of-the-art infotainment, fusing cutting-edge screen technology with the intuition of analogue controls.
            </p> */}

            <p className="latest-text">From the new elegant lines and aggressive grille that give it an unapologetic presence, to the raised centre console that holds you in the car. Piece by piece made from poise and purity to seek exhilaration at the speed of missiles.</p>

            <p className='latest-text latest-price'>Price - ₹4.19 Crore</p>
          </div>


        </Col>

        <CarCounter 
            powerEnd = {300}
            speedEnd = {150}
            wheelEnd = {115}
        />        
      </Row>

      
      <Row className='latest-section'>
        <Col lg={6} sm={12} md={12}>

          <div className="latest-text-container">
            {/* <span>Introducing The All New */}
                <h2 className='latest-title'>Aston Martin Rapide</h2>
            {/* </span> */}
            <p className='latest-text'>DB12. Redefining and reinventing what it means to be a tourer. An icon risen from 73 years of category defining marvels. Cutting through continents and taming tradition.
            </p>

            <p className="latest-text">From the new elegant lines and aggressive grille that give it an unapologetic presence, to the raised centre console that holds you in the car. Piece by piece made from poise and purity to seek exhilaration at the speed of missiles.</p>

            <p className='latest-text latest-price'>Price - ₹4.99 Crore</p>
          </div>


        </Col>

        <Col lg={6} sm={12} md={12} >
          {/* <img src={latest_car} className='latest-img'/> */}
          <video autoPlay loop muted className='latest-video'>
            <source src={latest_vid3} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

        </Col>

        <CarCounter
            powerEnd = {330}
            speedEnd = {160}
            wheelEnd = {125}
        />
      </Row>

      
      <Row className='latest-section'>
        <Col lg={6} sm={12} md={12}>

          {/* <img src={latest_car} className='latest-img'/> */}
          <video autoPlay loop muted className='latest-video'>
            <source src={latest_vid4} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

        </Col>

        <Col lg={6} sm={12} md={12}>

          <div className="latest-text-container">
            {/* <span>Introducing The All New */}
                <h2 className='latest-title'>Aston Martin Vulcanat</h2>
            {/* </span> */}
            <p className='latest-text'>DB12. Redefining and reinventing what it means to be a tourer. An icon risen from 73 years of category defining marvels. Cutting through continents and taming tradition.
            </p>

            <p className="latest-text">From the new elegant lines and aggressive grille that give it an unapologetic presence, to the raised centre console that holds you in the car. Piece by piece made from poise and purity to seek exhilaration at the speed of missiles.</p>

            <p className='latest-text latest-price'>Price - ₹5.49 Crore</p>
          </div>


        </Col>

        <CarCounter 
            powerEnd = {345}
            speedEnd = {170}
            wheelEnd = {140}
        />
      </Row>


    </Container>
  )
}

export default Latest