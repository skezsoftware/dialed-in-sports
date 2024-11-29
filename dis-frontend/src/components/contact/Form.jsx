import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Form = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        setSubmitStatus('error');
        console.log(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <form className="contact__form" ref={form} onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
        />
      </div>

      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          required
        />
      </div>

      <div className="form__group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
        />
      </div>

      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="submit-btn" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="submit-status success">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="submit-status error">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  )
}

export default Form