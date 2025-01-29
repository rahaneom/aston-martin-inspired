import React from 'react';
import './TheFooter.css';
import logo from '../../assets/aston.png';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const TheFooter = () => {
  return (
    <Container fluid className='footer-section'>
      <Row>
        <Col lg={9} className='footer-ul-container'>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <ul>
                <li className='list-heading'>Buy Vehicle</li>
                <div className="list-item-container">
                  <li className='list-item'>Find a new car</li>
                  <li className='list-item'>Book a test drive</li>
                  <li className='list-item'>Purchase Assistance</li>
                  <li className='list-item'>Vehicle Configurator</li>
                </div>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ul>
                <li className='list-heading'>Explore Us</li>
                <div className="list-item-container">
                  <li className='list-item'>Media Library</li>
                  <li className='list-item'>Brand Magazine</li>
                  <li className='list-item'>Our Partnerships</li>
                  <li className='list-item'>Community Involvement</li>
                </div>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ul>
                <li className='list-heading'>Support</li>
                <div className="list-item-container">
                  <li className='list-item'>Contact us</li>
                  <li className='list-item'>User Manuals</li>
                  <li className='list-item'>Customer Feedbacks</li>
                  <li className='list-item'>Warranty Information</li>
                </div>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <ul>
                <li className='list-heading'>Legal</li>
                <div className="list-item-container">
                  <li className='list-item'>Privacy Policy</li>
                  <li className='list-item'>Terms of Service</li>
                  <li className='list-item'>Copyright Information</li>
                  <li className='list-item'>Trademark Information</li>
                </div>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className='logo-media-container'>
          <Row>
            <Col xs={12}>
              <img src={logo} className='logo' alt="Logo" />
              <div className="media-container">
                <span><FaFacebook /></span>
                <span><FaYoutube /></span>
                <span><FaInstagramSquare /></span>
                <span><FaTwitter /></span>
              </div>
              <p>astonmartin@gmail.com</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TheFooter;
