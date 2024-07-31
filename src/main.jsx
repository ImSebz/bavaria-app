import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
  // </React.StrictMode>

)
