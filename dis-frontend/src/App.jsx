import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import UpButton from './components/up_button/UpButton'
import { HelmetProvider } from 'react-helmet-async';

// Initialize GA4
ReactGA.initialize('G-0S1XLWZV6M');

// Create a component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send more specific page titles
    const pageTitles = {
      '/': 'Dialed In Sports - Expert Sports Betting Analytics & Predictions',
      '/about': 'About Dialed In Sports - Premium Sports Betting Analytics Service',
      '/contact': 'Contact Dialed In Sports - Join Our Premium Service'
    };

    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname,
      title: pageTitles[location.pathname] || 'Dialed In Sports' // fallback title
    });
  }, [location]);

  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <HelmetProvider>
      <Router>
        <PageTracker />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <UpButton />
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
