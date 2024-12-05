import React from 'react';
import { Link } from 'react-router-dom';
import './success.css';

const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h1>Submission Successful!</h1>
        <p>Thank you for your interest in Dialed In Sports.</p>
        <p>Please check your email for a confirmation message with next steps. Check your spam folder if you do not see it.</p>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;