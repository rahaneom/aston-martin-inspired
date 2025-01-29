import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ServiceCover.css';

const ServiceCover = () => {
  return (
    <Container fluid className='service-cover' >
        <Row className='h-100'>
            <Col className='service-text-container d-flex align-items-center justify-content-center'>
            
            <div >
            <p className=''>Unmatched Luxury:</p>
            {/* <hr /> */}
            <h1>Aston Martin Services</h1>
            </div>

            </Col>
        </Row>
    </Container>
  )
}

export default ServiceCover