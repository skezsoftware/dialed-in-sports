import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import { FaChartLine, FaClock, FaUsers, FaCheckCircle, FaFootballBall, FaBasketballBall, FaBaseballBall, FaDiscord, FaLock, FaBell } from 'react-icons/fa'

const Home = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="company-name">Dialed In Sports</div>
          <h1>Expert Sports Analytics for Smarter Betting</h1>
          <p>Specialized analysis in College Football, College Basketball, College Baseball, and NFL</p>
          <button className="cta-button" onClick={handleContactClick}>Contact Us</button>
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

      {/* Discord Access Section */}
      <section className="discord-access">
        <div className="discord-access__container">
          <h2>Join Our Premium Discord</h2>
          <div className="pricing-card">
            <FaDiscord className="discord-icon" />
            <h3>Premium Picks Access</h3>
            <div className="price">$25<span>/month</span></div>
            <ul className="features-list">
              <li><FaLock /> Weekly Sports Picks</li>
              <li><FaBell /> Real-time Updates</li>
              <li><FaCheckCircle /> Expert Analysis</li>
              <li><FaUsers /> Community Discussion</li>
              <li><FaChartLine /> Direct Access to Experts</li>
            </ul>
            <button className="join-button" onClick={handleContactClick}>Contact Us to Join</button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="process__container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Subscribe</h3>
              <p>Join our premium Discord for $25/month</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Access</h3>
              <p>Get instant access to our private channels</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Receive Picks</h3>
              <p>Get weekly picks and analysis directly in Discord</p>
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
              <h3>Weekly Updates</h3>
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

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq__container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>When are picks posted?</h3>
              <p>Picks are posted weekly in our Discord channel, typically several hours before game time.</p>
            </div>
            <div className="faq-item">
              <h3>What sports do you cover?</h3>
              <p>We cover College Football, NFL, College Basketball, and College Baseball.</p>
            </div>
            <div className="faq-item">
              <h3>How do I access the Discord?</h3>
              <p>After subscribing, you'll receive an exclusive invite link to join our private Discord server.</p>
            </div>
            <div className="faq-item">
              <h3>What's included in the membership?</h3>
              <p>Weekly picks, analysis, community discussion, and direct access to our experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <h2>Ready to Start Winning?</h2>
          <p>Get in touch with us to join our community of successful bettors.</p>
          <button className="cta-button" onClick={handleContactClick}>Contact Us Today</button>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer">
        <div className="disclaimer__container">
          <div className="disclaimer__main">
            <p>Gambling involves risk. Please gamble responsibly and only bet what you can afford to lose.</p>
          </div>
          <div className="disclaimer__legal">
            <h4>Legal Sports Betting States</h4>
            <p>Sports betting is not legal in all states. Please verify that you are located in a state where sports betting is legal before placing any bets. As of 2024, sports betting is legal in:</p>
            <div className="legal-states">
              <ul>
                <li>Arizona</li>
                <li>Colorado</li>
                <li>Connecticut</li>
                <li>Illinois</li>
                <li>Indiana</li>
                <li>Iowa</li>
                <li>Kansas</li>
                <li>Louisiana</li>
              </ul>
              <ul>
                <li>Maryland</li>
                <li>Massachusetts</li>
                <li>Michigan</li>
                <li>Nevada</li>
                <li>New Hampshire</li>
                <li>New Jersey</li>
                <li>New York</li>
                <li>Ohio</li>
              </ul>
              <ul>
                <li>Oregon</li>
                <li>Pennsylvania</li>
                <li>Rhode Island</li>
                <li>Tennessee</li>
                <li>Virginia</li>
                <li>Washington</li>
                <li>West Virginia</li>
                <li>Wyoming</li>
              </ul>
            </div>
            <p className="disclaimer__note">*This list is subject to change. Please check your local laws and regulations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home