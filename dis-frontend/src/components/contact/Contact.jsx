import React from 'react'
import { Helmet } from 'react-helmet-async'
import './contact.css'
import Form from './Form'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ... your existing email submission logic ...
      
      // After successful submission
      navigate('/success');
    } catch (error) {
      // ... your error handling ...
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Dialed In Sports - Join Our Premium Service</title>
        <meta name="description" content="Get in touch to join our premium sports betting analytics Discord service. Expert picks and analysis for College Football, NFL, College Basketball, and College Baseball." />
        <meta name="keywords" content="sports betting discord, premium betting picks, sports analytics contact, join betting service" />
        <link rel="canonical" href="https://dialed-in-sports.vercel.app/contact"/>
      </Helmet>
      <div className="contact">
        <div className="contact__header">
          <h1>Join Our Community</h1>
          <p>Express your interest in joining our premium Discord service, and we'll guide you through the next steps</p>
          <div className="contact__subheader">
            <p>What to expect:</p>
            <ul>
              <li>Detailed instructions for Discord access</li>
              <li>Payment setup information</li>
              <li>Welcome package with getting started guide</li>
            </ul>
          </div>
        </div>

        <div className="contact__container">
          <div className="form__header">
            <h2>Get Started Today</h2>
            <p>Fill out the form below and we'll reach out with everything you need to join</p>
          </div>
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default Contact