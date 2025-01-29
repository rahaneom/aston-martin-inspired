import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TheService.css';
import tyre1 from '../../assets/tyre2.jpg';
import ac1 from '../../assets/ac2.jpg';
import safety1 from '../../assets/safety.webp';

const TheService = () => {
  return (
    <Container fluid className='services-container'>
      <Row className='service-container-row'>

        {/* FIRST SERVICE  */}
        <Col lg={6} className='service-container-col'>
          <img src={tyre1} className='service-img' alt='Tyre' />
        </Col>

        <Col lg={6} className='service-container-col '>
        
            <div className="service-text service-container-col">
                <h1>R16 Dual-Tone Wheels</h1>
                <p>Elevate your driving experience with the striking allure of R16 Dual-Tone Laser Cut Alloy Wheels. Crafted with precision and innovation, these wheels are more than just a visual enhancement – they're a statement of style and performance. </p>
                
                <p>Crafted with precision and innovation, the onlookers will be left dazzled when your car has LASER cut 16” dual-tone alloy wheels that add to the athletic side profile and also enhance handling.</p>
                
            </div>
        </Col>

        {/* SECOND SERVICE  */}
        <Col lg={6} className='service-container-col '>
        
            <div className="service-text service-container-col">
                <h1>Ultimate Rear Comfort with AC</h1>
                <p>Experience ultimate comfort for rear passengers with rear AC vents and a convenient power outlet. Ensure backseat passengers stay cool and comfortable even on the hottest days with dedicated rear AC vents that circulate air throughout the cabin.
                </p>
                <p>Whether it's a long road trip or a quick drive around town, everyone in the car can enjoy a comfortable and connected experience with rear AC vents and a power outlet at their fingertips.</p>
                
            </div>
        </Col>

        <Col lg={6} className='service-container-col'>
          <img src={ac1} className='service-img' alt='Tyre' />
        </Col>

        {/* THIRD SERVICE  */}
        <Col lg={6} className='service-container-col'>
          <img src={safety1} className='service-img' alt='Tyre' />
        </Col>

        <Col lg={6} className='service-container-col '>
        
            <div className="service-text service-container-col">
                <h1>Ensured Safety with ABS </h1>
                <p>Aston Martin's ABS prevents wheel lock-up during braking, allowing drivers to maintain steering control and prevent skidding. This system optimizes brake pressure to each wheel independently, ensuring maximum stopping power while minimizing the risk of loss of control.
                </p>
                <p> It temporarily holds the brakes after the driver releases the brake pedal, giving them time to transition to the accelerator without worrying about rolling back, enhancing safety.</p>
                <p> By detecting and mitigating understeer or oversteer conditions, CSC applies precise braking to individual wheels, helping the vehicle maintain its intended trajectory and improving overall handling.</p>
                
            </div>
        </Col>

      </Row>
    </Container>
  );
};

export default TheService;
