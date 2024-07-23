import React from 'react';
import Navbar from './components/NavBar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Map from './pages/map/map';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
    </div>
  )
}

export default App