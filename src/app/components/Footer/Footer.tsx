"use client";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <p>© {new Date().getFullYear()} Kenneth's Portfolio</p>
        <div>
          <a
            href="https://twitter.com/kwan132382"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/wanke20"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/kennethwan18"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
