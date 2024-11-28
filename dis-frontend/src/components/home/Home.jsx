import React from 'react'
import './home.css'
import { FaChartLine, FaClock, FaUsers, FaCheckCircle, FaFootballBall, FaBasketballBall, FaBaseballBall } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1>Expert Sports Analytics for Smarter Betting</h1>
          <p>Specialized analysis in College Football, College Basketball, College Baseball, and NFL</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Sports Coverage Section - NEW */}
      <section className="sports-coverage">
        <div className="sports-coverage__container">
          <h2>Our Sports Coverage</h2>
          <div className="sports-grid">
            <div className="sport-item">
              <div className="sport-image college-football"></div>
              <div className="sport-content">
                <FaFootballBall className="sport-icon" />
                <h3>College Football</h3>
                <p>In-depth analysis of NCAA Football matchups</p>
              </div>
            </div>
            <div className="sport-item">
              <div className="sport-image nfl"></div>
              <div className="sport-content">
                <FaFootballBall className="sport-icon" />
                <h3>NFL</h3>
                <p>Professional football insights and predictions</p>
              </div>
            </div>
            <div className="sport-item">
              <div className="sport-image college-basketball"></div>
              <div className="sport-content">
                <FaBasketballBall className="sport-icon" />
                <h3>College Basketball</h3>
                <p>NCAA Basketball betting analysis</p>
              </div>
            </div>
            <div className="sport-item">
              <div className="sport-image college-baseball"></div>
              <div className="sport-content">
                <FaBaseballBall className="sport-icon" />
                <h3>College Baseball</h3>
                <p>College Baseball market opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__container">
          <div className="stat__card">
            <FaUsers className="stat__icon" />
            <h3>500+</h3>
            <p>Satisfied Users</p>
          </div>
          <div className="stat__card">
            <FaChartLine className="stat__icon" />
            <h3>85%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat__card">
            <FaClock className="stat__icon" />
            <h3>20+ Hours</h3>
            <p>Weekly Research</p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="value-prop__container">
          <h2>Why Choose Us</h2>
          <div className="value-prop__cards">
            <div className="value-card">
              <h3>Save Valuable Time</h3>
              <p>We handle the extensive research, data analysis, and trend monitoring so you can focus on what matters most to you.</p>
            </div>
            <div className="value-card">
              <h3>Passion for Sports</h3>
              <p>Our team lives and breathes sports, combining our passion with analytical expertise to deliver winning insights.</p>
            </div>
            <div className="value-card">
              <h3>Proven Track Record</h3>
              <p>Join over 500 successful users who trust our analytics for their sports betting decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <h2>What We Offer</h2>
          <div className="features__grid">
            <div className="feature">
              <FaCheckCircle className="feature__icon" />
              <h3>Expert Analysis</h3>
              <p>In-depth research and statistical analysis for every pick</p>
            </div>
            <div className="feature">
              <FaCheckCircle className="feature__icon" />
              <h3>Bankroll Management</h3>
              <p>Strategic advice to maximize your long-term success</p>
            </div>
            <div className="feature">
              <FaCheckCircle className="feature__icon" />
              <h3>Daily Updates</h3>
              <p>Regular updates and insights on upcoming games</p>
            </div>
            <div className="feature">
              <FaCheckCircle className="feature__icon" />
              <h3>Community Support</h3>
              <p>Join a community of successful sports bettors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <h2>Ready to Start Winning?</h2>
          <p>Join our community of successful bettors and take your sports betting to the next level.</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  )
}

export default Home