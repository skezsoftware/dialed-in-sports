import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <nav className="footer">
      <ul className="footer-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Footer