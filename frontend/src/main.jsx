import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './landing_page/home/Home'
import SignUp from './landing_page/signup/SignUp'
import About from './landing_page/about/About'
import Product from './landing_page/products/Product'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)