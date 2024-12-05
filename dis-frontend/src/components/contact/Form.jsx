import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './contact.css'

const Form = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus('success');
        form.current.reset();
        setTimeout(() => {
          navigate('/success');
        }, 1000);
      }, (error) => {
        setSubmitStatus('error');
        console.log(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

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
        <label htmlFor="state">State</label>
        <select
          id="state"
          name="user_state"
          required
        >
          <option value="">Select your state</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="Let us know you're interested in our service and we'll get back to you with membership details!"
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