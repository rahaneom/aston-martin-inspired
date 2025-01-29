import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoHorizontalRule } from "react-icons/go";
import interior1 from '../../assets/interior1.jpeg'
import './TheHistory.css'
import interior2  from '../../assets/aston-cover8.webp'
import interior3  from '../../assets/aston-cover2.webp'
import vid from '../../assets/aston-vid9.mp4'

const TheHistory = () => {
  return (
    <Container fluid className='history-section'>
        <Row>
            <Col lg={6}>
              <div className="history-title">
                <p>OUR</p>
                {/* <span className='icon'><GoHorizontalRule /></span> */}
                <hr />
                <h1>History</h1>
              </div>

              <div className="history-text">
                <p>Welcome to Aston Martin, where timeless elegance meets exhilarating performance. Originally founded as 'Bamford & Martin Ltd,' the company quickly gained recognition for its commitment to performance and quality. In 1920, the brand was officially renamed Aston Martin, after Lionel Martin's successful performances at the Aston Hill Climb.
                </p>

                <p>Our hand-built vehicles combine state-of-the-art technology with unparalleled design, offering an unparalleled driving experience that captivates enthusiasts worldwide. Throughout the decades, Aston Martin has weathered various challenges, including ownership changes and financial difficulties. However, its dedication to crafting luxury sports cars never wavered. In the 1950s and 1960s, Aston Martin cemented its reputation with iconic models such as the DB series, which achieved international success both on the racetrack on the road.
                </p>

                <p>
                Today, Aston Martin remains at the forefront of automotive design and engineering, with a commitment to producing handcrafted luxury cars that embody the essence of British motoring heritage. With a rich history spanning over a century, Aston Martin continues to inspire and delight drivers with its timeless elegance and exhilarating performance.
                </p>



              </div>
            </Col>

            <Col lg={6}>
                <img src={interior3} className='interior-img' />
                {/* <video autoPlay loop muted  className='img'>
                    <source src={vid} type='video/mp4' className='interior-img'/>
                    Your browser does not support the video tag.
                </video> */}
            </Col>
        </Row>

    
    </Container>
  )
}

export default TheHistory