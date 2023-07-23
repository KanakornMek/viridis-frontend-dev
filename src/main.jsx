import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/landingpage'
import Portfolio from './pages/portfolio'
import Services from './pages/services'
import Loginpage from './pages/loginpage'
import Profile from './pages/profile'
import Registerpage from'./pages/register'
import Docspage from './pages/docs'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/login',
    element: <Loginpage />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/register',
    element: <Registerpage />
  },
  {
    path: '/docs',
    element: <Docspage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
