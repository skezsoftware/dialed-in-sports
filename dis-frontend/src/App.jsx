import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from "@vercel/analytics/react"
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import UpButton from './components/up_button/UpButton'
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import SuccessPage from './components/contact/SuccessPage';

// Page tracking function
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-0S1XLWZV6M', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

// Wrapper component to use the hook
const AppContent = () => {
  usePageTracking();
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <UpButton />
      <Footer />
      <Analytics />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  )
}

export default App
