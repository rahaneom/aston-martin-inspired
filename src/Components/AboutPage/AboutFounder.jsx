import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutFounder.css'
import abt1 from '../../assets/abt1.webp'
import abt2 from '../../assets/abt2.webp'
import abt3 from '../../assets/abt3.jpg'
import abt4 from '../../assets/abt5.png'
import abt5 from '../../assets/aston-cover10.jpg'
import abt6 from '../../assets/car4.webp'
import abt7 from '../../assets/aston-cover8.webp'

const AboutFounder = () => {
  return (
    <Container fluid>
                
      <Row className='abt-section'>
        <Col lg={6} className='col-container'>

          <img src={abt2} className='abt-img'/>

        </Col>

        <Col lg={6} className='col-container'>
          <div className="abt-text-container">
            <span>The Heritage<h2 className='abt-title'>1913 – 1946</h2></span>
            <p className='abt-text'>
            The origins of Aston Martin take us all the way back to 1913, when the company was founded by Lionel Martin and Robert Bamford. Back then, it wasn’t yet known as Bamford & Martin. The first vehicle that the pair named Aston Martin was a 1908 Isotta Fraschini, which they had fitted with a four-cylinder engine.
            </p>

            <p className="abt-text">
            After the two men began hand-building cars, Lionel Martin raced one at the Aston Clinton Hill Climb race in Buckinghamshire, England, The rest, as they say, is history.
            </p>

          </div>
        </Col>

        <Col lg={12} className='col-container'>

          <img src={abt3} className='abt-img'/>

        </Col>

        
        <Col lg={12} className='col-container'>

          <div className="abt-text-container">
            <h2 className='abt-title abt-history-title'>A Chronology of Aston Martin Over the Years</h2>
            <p className='abt-text abt-history-text'>
            It wasn’t until 1915 that Bamford & Martin would create the first vehicle entirely produced by the company, but production was quickly halted by the First World War. After the war, Bamford & Martin took up production at a location in Kensington, London, where it would produce approximately 55 vehicles before the company went bankrupt in 1924. There was no choice but to sell the company in 1925, when it was bought by Bill Renwick, Augustus Bertelli, and a group of investors. That same year, the new owners renamed the company Aston Martin Motors. By 1932, the company yet again faced financial difficulties and was sold to an individual named Lance Prideaux Brune, who then passed it on to Sir Arthur Sutherland.
            </p>
          </div>


        </Col>


        <Col lg={6} className='col-container'>
          <div className="abt-text-container">
            <span>The Pioneer<h2 className='abt-title'>1947 – 1995</h2></span>
            <p className='abt-text'>
            David Brown, a machine tools manufacturer, bought Aston Martin in 1947. Under Brown’s ownership in 1950, plans for a prototype called the DB2 were announced, followed by the DB2/4 in 1953, the DB2/4 MkII in 1955, the DB Mark III in 1957, and the DB4 in 1958. These models effectively shaped the Aston Martin lineup as we know it today.
            </p>

            <p className="abt-text">
            In fact, the Aston Martin DBS dates back to 1967, when it was first introduced under David Brown’s ownership.
            </p>

          </div>
        </Col>
        
        <Col lg={6} className='col-container'>

          <img src={abt1} className='abt-img'/>

        </Col>

        <Col lg={6} className='col-container'>

          <img src={abt4} className='abt-img'/>

        </Col>

        <Col lg={6} className='col-container'>
          <div className="abt-text-container">
            <span>F1 Series <h2 className='abt-title'>1996-2010</h2></span>
            <p className='abt-text'>
            After months of intense preparation and meticulous engineering, the Aston Martin team arrived at the iconic F1 Series with one goal in mind: to dominate the track and claim victory. With a talented roster of drivers and state-of-the-art technology under the hood, the team was primed for success.
            </p>

            <p className="abt-text">
            In a thrilling race that kept fans on the edge of their seats, Velocity Motors secured a historic victory in the Formula 1 series, marking a significant milestone in the company's racing legacy.
            </p>

          </div>
        </Col>

        
        <Col lg={6} className='col-container'>
          <div className="abt-text-container">
            <span>Craftsmanship & Innovation<h2 className='abt-title'>2011 - Present</h2></span>
            <p className='abt-text'>
            As of today, Aston Martin stands as a renowned luxury automotive manufacturer with a rich heritage and a commitment to blending traditional craftsmanship with cutting-edge technology. Aston Martin offers a range of high-performance luxury vehicles, including sports cars, grand tourers, and limited-edition models.
            </p>

            <p className="abt-text">
            Overall, Aston Martin stands today as a symbol of luxury, performance, and timeless elegance, embodying the spirit of British automotive craftsmanship in the modern era.
            </p>

          </div>
        </Col>
        
        <Col lg={6} className='col-container'>

          <img src={abt6} className='abt-img'/>

        </Col>

      </Row>
    </Container>
  )
}

export default AboutFounder