import React, { Suspense } from 'react';
import Navbar from './components/NavBar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Main from './pages/main/main';
import Citys from './pages/citys/citys';
import Cali from './pages/cali/cali';
import Barranquilla from './pages/barranquilla/barranquilla';
import Footer from './components/Footer/footer';
import CouponView from './components/CouponView/couponView';

// Lazy load the Map and MapCali components
const Map = React.lazy(() => import('./pages/map/map'));
const MapCali = React.lazy(() => import('./pages/map-cali/mapCali'));
const MapBarranquilla = React.lazy(() => import('./pages/map-barranquilla/mapBarranquilla'));

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cartagena' element={<Home />} />
          <Route path='/barranquilla' element={<Barranquilla />} />
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

          <Route path='/mapa-barranquilla' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <MapBarranquilla />
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