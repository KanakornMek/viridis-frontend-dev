import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import HomePage from './pages/landingpage'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Loginpage from './pages/loginpage'
import Profile from './pages/profile'
import Docspage from './pages/docs'
import Buyingpage from './pages/buying'
import GenQrPage from './pages/genqrpage'

import { AuthProvider, AuthContext } from './contexts/AuthContext'
import QRPage from './pages/qr'
const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  if (auth === null) {
    return <div>Loading...</div>;
  }

  if (!auth) {
    return <Navigate to='/login' />;
  }

  return children;
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/docs" element={<Docspage />} />
          <Route path='/generate-qr' element={<GenQrPage />} />
          <Route path='/qr' element={<QRPage />} />
          <Route path="/portfolio" element={<PrivateRoute><Portfolio/></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)

