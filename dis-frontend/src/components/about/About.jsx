import React from 'react'
import './about.css'
import { FaFootballBall, FaBasketballBall, FaBaseballBall } from 'react-icons/fa'

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h1>About Our Service</h1>
        
        <div className="about__content">
          <div className="about__description">
            <p>
              Welcome to our premium sports betting analytics service. We specialize in providing expert insights and predictions across major college sports and NFL, combining traditional handicapping wisdom with cutting-edge analytics.
            </p>
          </div>

          <div className="about__sports">
            <div className="sport__card">
              <FaFootballBall />
              <h3>College Football & NFL</h3>
            </div>
            <div className="sport__card">
              <FaBasketballBall />
              <h3>College Basketball</h3>
            </div>
            <div className="sport__card">
              <FaBaseballBall />
              <h3>College Baseball</h3>
            </div>
          </div>

          <div className="about__approach">
            <h2>Our Approach</h2>
            <div className="approach__cards">
              <div className="approach__card">
                <h3>Analytics-Driven</h3>
                <p>Modern statistical analysis and data modeling</p>
              </div>
              <div className="approach__card">
                <h3>Traditional Handicapping</h3>
                <p>Time-tested handicapping methodologies</p>
              </div>
              <div className="approach__card">
                <h3>Bankroll Management</h3>
                <p>Strategic approach for long-term success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About