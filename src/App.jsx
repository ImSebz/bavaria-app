import React from 'react';
import Navbar from './components/NavBar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Map from './pages/map/map';
import Footer from './components/Footer/footer';
import WidgetLoader from './components/WidgetLoader/widgetLoader';
import CouponView from './components/CouponView/couponView';

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mapa' element={<Map />} />
          <Route path='/cupon' element={<CouponView />} />
        </Routes>
      </div>
      <Footer />
      <WidgetLoader />
    </>

  )
}

export default App