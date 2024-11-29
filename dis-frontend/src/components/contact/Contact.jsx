import React from 'react'
import './contact.css'
import Form from './Form'

const Contact = () => {
  return (
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
        <Form />
      </div>
    </div>
  )
}

export default Contact