import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Offers.css';

const Offers = () => {
  return (
    <Container fluid className='offers-section'>
        <Row>
            <Col>
                <div className="offer-text-container">
                    <h1 className='offer-heading'>
                    Experience the <span>Aston Martin's Exclusive Offers</span> now! From the sleek designs to advanced technology, find everything you're looking for and more.
                    </h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Offers