import React from 'react'
import { Helmet } from 'react-helmet-async'
import './about.css'
import { FaFootballBall, FaBasketballBall, FaBaseballBall, FaChartLine, FaCalculator, FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Dialed In Sports - Premium Sports Betting Analytics Service</title>
        <meta name="description" content="Learn about Dialed In Sports' premium betting analytics service. Expert insights for College Football, NFL, College Basketball, and College Baseball betting." />
        <meta name="keywords" content="sports betting analytics, college football picks, NFL betting, college basketball predictions, sports handicapping, betting expertise" />
        <link rel="canonical" href="https://dialed-in-sports.vercel.app/about"/>
      </Helmet>

      <main className="about">
        <div className="about__container">
          <h1>Premium Sports Betting Analytics Service</h1>
          
          <div className="about__content">
            <section className="about__description" aria-label="Service Overview">
              <div className="description__header">
                <h2>Your Trusted Source for Premium Sports Betting Analytics</h2>
              </div>
              <div className="description__content">
                <p className="description__main">
                  Welcome to Dialed In Sports, where precision meets passion. We specialize in providing expert insights and predictions across major college sports and NFL, combining traditional handicapping wisdom with cutting-edge analytics for optimal results.
                </p>
                <div className="description__highlights">
                  <div className="highlight__item">
                    <span className="highlight__number">24/7</span>
                    <span className="highlight__text">Discord Access</span>
                  </div>
                  <div className="highlight__item">
                    <span className="highlight__number">4+</span>
                    <span className="highlight__text">Sports Covered</span>
                  </div>
                  <div className="highlight__item">
                    <span className="highlight__number">$25</span>
                    <span className="highlight__text">Monthly Access</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="about__sports" aria-label="Sports Coverage">
              <h2>Our Sports Coverage</h2>
              <div className="sports__grid">
                <article className="sport__card">
                  <FaFootballBall aria-hidden="true" />
                  <h3>College Football & NFL</h3>
                  <p>Expert analysis for both college and professional football betting markets</p>
                </article>
                <article className="sport__card">
                  <FaBasketballBall aria-hidden="true" />
                  <h3>College Basketball</h3>
                  <p>In-depth NCAA basketball betting insights and predictions</p>
                </article>
                <article className="sport__card">
                  <FaBaseballBall aria-hidden="true" />
                  <h3>College Baseball</h3>
                  <p>Specialized college baseball market analysis and picks</p>
                </article>
              </div>
            </section>

            <section className="about__approach" aria-label="Our Methodology">
              <h2>Our Winning Approach</h2>
              <div className="approach__cards">
                <article className="approach__card">
                  <FaChartLine aria-hidden="true" className="approach__icon" />
                  <h3>Analytics-Driven</h3>
                  <p>Leveraging advanced statistical analysis and data modeling for accurate predictions</p>
                </article>
                <article className="approach__card">
                  <FaCalculator aria-hidden="true" className="approach__icon" />
                  <h3>Traditional Handicapping</h3>
                  <p>Combining proven handicapping methods with modern analytics</p>
                </article>
                <article className="approach__card">
                  <FaPiggyBank aria-hidden="true" className="approach__icon" />
                  <h3>Bankroll Management</h3>
                  <p>Strategic betting approaches designed for sustainable long-term success</p>
                </article>
              </div>
            </section>

            <section className="about__expertise" aria-label="Our Expertise">
              <h2>Why Choose Our Service</h2>
              <div className="expertise__content">
                <p>With years of experience in sports betting analytics, our team provides:</p>
                <ul>
                  <li>Weekly expert picks and analysis</li>
                  <li>Real-time updates through our Discord community</li>
                  <li>Proven track record of success</li>
                  <li>Comprehensive betting strategies</li>
                  <li>Professional customer support</li>
                </ul>
                <Link to="/contact" className="expertise__cta">
                  Get Started Today
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default About