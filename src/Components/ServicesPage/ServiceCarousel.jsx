import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ServiceCarousel.css'
import Card from 'react-bootstrap/Card';
import slick1 from '../../assets/slick-img1.webp'
import slick2 from '../../assets/slick-img2.webp'
import slick3 from '../../assets/slick-img3.webp'
import slick4 from '../../assets/slick-img4.webp'
import slick5 from '../../assets/slick-img5.webp'
import slick6 from '../../assets/slick-img6.webp'
import slick7 from '../../assets/slick-img7.webp'

const ServiceCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const slickArray = [
        {
            img: slick1,
            title: "TOUCHSCREEN"
        },
        {
            img: slick2,
            title: "CONNECTED CAR"
        },
        {
            img: slick3,
            title: "AUDIO"
        },
        {
            img: slick4,
            title: "INFOTAINMENT"
        },
        {
            img: slick5,
            title: "PREMIUM CUSHION"
        },
    ]

    return (
        <Container fluid className='service-carousel-section'>
            <Row>
                <Col>
                    {/* <div className="service-title-container">
                        <h1 className='service-carousel-title' >Interior</h1>
                    </div> */}
                    <Slider {...settings}>
                        
                        {
                            slickArray.map( (obj) => {
                                return(
                                    <>
                                        <div className='card-container'>
                                            <Card className='card-comp'>
                                                <Card.Img variant="top" src={obj.img} className='slick-img'/>
                                                {/* <Card.Body> */}
                                                    <Card.Title className='card-text'>{obj.title}</Card.Title>
                                                {/* </Card.Body> */}
                                            </Card>
                                        </div>
                                    
                                    </>
                                )
                            })
                        }

                    </Slider>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceCarousel;
