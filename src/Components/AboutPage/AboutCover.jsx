import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './AboutCover.css';

const ServiceCover = () => {
  return (
    <Container fluid className='about-cover' >
        <Row className='h-100'>
            <Col className='about-text-container d-flex align-items-center justify-content-center'>
            
            <div >
            <p className=''>Inside Story:</p>
            {/* <hr /> */}
            <h1>The Aston Martin</h1>
            </div>

            </Col>
        </Row>
    </Container>
  )
}

export default ServiceCover