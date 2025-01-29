import React, { useEffect, useState, useRef } from 'react';
import './ExNavbar.css';
import logo from '../../assets/aston.png';
import car_engine from '../../assets/car-engine.mp3';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import menu_icon from '../../assets/menu-icon.png';

const ExNavbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation(); // React Router's useLocation hook

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const playContactSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    }
  };

  const toggleMenu = () => {
    setMobileMenu(prevState => !prevState);
  };

  const navItemsArray = [
    {
      itemTitle: 'Home',
      itemPath: '',
    },
    {
      itemTitle: 'Discover',
      itemPath: 'discover',
    },
    {
      itemTitle: 'Services',
      itemPath: 'service',
    },
    {
      itemTitle: 'About Us',
      itemPath: 'about_us',
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <nav className={`containerr ${sticky ? 'dark-nav' : ''}`}>
            <Link to=''>
              <img src={logo} className='logo' alt='Logo' />
            </Link>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
              {navItemsArray.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.itemPath}
                    className={location.pathname === `/${item.itemPath}` ? 'active' : ''}
                  >
                    {item.itemTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='contact-btn-container'>
              <Link to='contact'>
                <button className={`contact-btn ${location.pathname === '/contact' ? 'active' : ''}`} onClick={playContactSound}>
                  Contact 
                </button>
              </Link>
            </div>

            <img src={menu_icon} className='menu-icon' onClick={toggleMenu} />

            <audio ref={audioRef} src={car_engine} />
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default ExNavbar;
