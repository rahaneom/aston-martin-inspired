import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ContactUs.css'
import contact1 from '../../assets/contact-img.jpg'
import contact2 from '../../assets/contact-img2.jpg'
import contact3 from '../../assets/contact-img3.jpg'
import contact4 from '../../assets/contact-img4.jpg'

const ContactUs = () => {
    
    const [name, setName] = useState("");
    const [roll, setRoll] = useState();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

  return (
    <Container fluid className='contact-section'>
        <Row>
            <Col lg={6} md={12} sm={12} className='contact-image'>
                {/* <img src={contact2} className='contact-img'/> */}
            </Col>

        
        <Col lg={6} md={12} sm={12} className='form-container'>

        <Form className='form-comp'>
            <h2 className=' mb-5 form-title'>Stay In Touch!</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='input-label'>First Name</Form.Label>
            <Form.Control className='form-input' type="text" placeholder="John" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='input-label'>Last Name</Form.Label>
            <Form.Control className='form-input' type="text" placeholder="Doe" value={roll} onChange={(e) => setRoll(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='input-label'>Email address</Form.Label>
            <Form.Control className='form-input' type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='input-label'>Address</Form.Label>
            <Form.Control className='form-input' as="textarea" rows={2} value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>

        
        <Button variant="none" className='submit-btn'>Submit</Button>
        </Form>
        


        </Col>

        </Row>
    </Container>
  )
}

export default ContactUs