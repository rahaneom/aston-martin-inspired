import React from 'react';
import ExCounter from '../Counter/ExCounter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TheDiscover.css';
import latest_car from '../../assets/aston-history.webp';
import latest_vid1 from '../../assets/aston-vid9.mp4'
import latest_vid2 from '../../assets/aston-vid6.mp4'
import TheFooter from '../TheFooter/TheFooter'

const TheDiscover = (props) => {
  return (
    <>
    <Container fluid className='discover-section'>
      <Row className='h-100 align-items-center'> {/* Added align-items-center */}
        <Col xs={12} className='discover-cover-text text-center'> {/* Added text-center */}
          <div>
            <p>{props.para}:</p>
            <h1>{props.heading}</h1>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default TheDiscover;
