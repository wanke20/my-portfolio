"use client"
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundSize, setBackgroundSize] = useState(100); // initial value

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    setBackgroundSize((window.outerHeight - scrollPosition) / 4 >= 115 
      ? (window.outerHeight - scrollPosition) / 4: 115);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div style={{ backgroundSize: `${backgroundSize}%` }} className="hero-container">
      <div className="text">
        <h1 className="title">Hey, I'm Kenny!</h1>
        <p>
          I'm a Computer Science undergrad at Northeastern University. I
          specialize in Java, JavaScript, and TypeScript, and I have a passion
          for building web applications using React and Next.js.
        </p>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >Click to Review Resume →</a>
      {/* <button>
        Click to Review Resume →
      </button> */}
    </div>
  );
};

export default Hero;
