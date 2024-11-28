import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-links">
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
  );
};

export default Header;
