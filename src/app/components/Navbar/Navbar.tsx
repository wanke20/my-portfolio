"use client";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const scrollToSkills = () =>{
    window.scrollTo({
      top: 650, 
      behavior: 'smooth'
    });
  };

  const scrollToProjects = () =>{
    window.scrollTo({
      top: 1300, 
      behavior: 'smooth'
    });
  };

  return (
    <header className="header-container">
      <nav className="navigation">
        <a href="/" className="brand-name">
          Kenneth's Portfolio
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <button onClick={scrollToSkills}>Skills</button>
            </li>
            <li>
              <button onClick={scrollToProjects}>Projects</button>
            </li>
            {/* <li>
              <a href="/projects">Projects</a>
            </li> */}
          </ul>
        </div>
        <button className="contact-button">
          Contact Me
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
