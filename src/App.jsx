import React, { Suspense } from 'react';
import Navbar from './components/NavBar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Citys from './pages/citys/citys';
import Cali from './pages/cali/cali';
import Footer from './components/Footer/footer';
import CouponView from './components/CouponView/couponView';

// Lazy load the Map and MapCali components
const Map = React.lazy(() => import('./pages/map/map'));
const MapCali = React.lazy(() => import('./pages/map-cali/mapCali'));

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mapa' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Map />
            </Suspense>
          } />
          <Route path='/mapa-cali' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <MapCali />
            </Suspense>
          } />
          <Route path='/ciudades' element={<Citys />} />
          <Route path='/cali' element={<Cali />} />
          <Route path='/cupon' element={<CouponView />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;