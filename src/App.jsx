import './App.css'
import ExNavbar from './Components/Navbar/ExNavbar'
import TheFooter from './Components/TheFooter/TheFooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TheDiscover from './Components/DiscoverSection/DiscoverSection'
import TheHome from './Components/TheHome/TheHome'
import ServicePage from './Components/ServicesPage/ServicePage'
import AboutPage from './Components/AboutPage/AboutPage'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactUs from './Components/ContactPage/ContactUs'
import WelcomeSound from './Components/WelcomeSound'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    <BrowserRouter>
      <WelcomeSound />
      <ScrollToTop />
      <ExNavbar/>
        <Routes>
          <Route path='/' element={<TheHome />}  />
          <Route path='/discover' element={<TheDiscover/>} />
          <Route path='/service' element={<ServicePage/>} />
          <Route path='/about_us' element={<AboutPage/>} />

          <Route path='/contact' element={<ContactUs/>} />

        </Routes>
      <TheFooter/>
    </BrowserRouter>
    </>
  )
}

export default App