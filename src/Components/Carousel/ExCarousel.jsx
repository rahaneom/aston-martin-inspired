import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '../../assets/car1.webp';
import car2 from '../../assets/car2.jpeg';
import car3 from '../../assets/car3.webp';
import car4 from '../../assets/car4.webp';
import vid1 from '../../assets/aston-vid1.mp4';
import vid2 from '../../assets/aston-vid2.mp4';
import vid3 from '../../assets/aston-vid3.mp4';
import './ExCarousel.css';
import ExampleCarouselImage from '../ExampleCarouselImage';
import TheDiscover from '../DiscoverSection/DiscoverSection'
import { Container, Row, Col } from 'react-bootstrap';

const ExCarousel = () => {

    const carouselArray = [
        {
            title: "Vulcanat",
            subtitle: "Thrill. Driven.",
            interval: 9000,
            vid: vid2
        },
        {
            title: "Vantage",
            subtitle: "Unleash the Power",
            interval: 13000,
            vid: vid3
        },
        {
            title: "Rapide",
            subtitle: "Safety Elevated",
            interval: 7000,
            vid: vid1
        }
    ]

  return (
    <>
        
    <Container fluid>
        <Row>
            <Col lg={12} md={12} sm={12} className='carousel-col'>
                <Carousel fade className='carousel-comp'>
                {
                carouselArray.map( (obj) => {
                    return(
                        <Carousel.Item interval={obj.interval}>
                        <ExampleCarouselImage text="First slide" src={obj.vid}/>
                        <Carousel.Caption className='carousel-caption-bottom-left'>
                            <div className="carousel-text">
                            <h5>{obj.subtitle}</h5>
                            <h1>The {obj.title}</h1>

                            <div className="carousel-btns">
                                <button className='explore-btn' >Explore</button>
                                <button className='explore-btn more-btn'>More</button>
                            </div>
                            </div>
                            {/* <img src={car3} alt="" /> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })
                }
                </Carousel>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ExCarousel