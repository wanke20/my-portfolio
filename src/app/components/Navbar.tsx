"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects"] as const;
type SectionId = (typeof sections)[number];

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsNavExpanded(false);

  const renderNavLink = (id: SectionId, label: string) => (
    <li key={id}>
      <a
        href={`/#${id}`}
        onClick={closeMenu}
        className={activeSection === id ? "nav-active" : undefined}
        aria-current={activeSection === id ? "true" : undefined}
      >
        {label}
      </a>
    </li>
  );

  return (
    <header className="header-container">
      <nav
        className={`navigation${scrolled ? " nav-scrolled" : ""}`}
        aria-label="Primary"
      >
        <Link href="/" className="brand-name">
          Kenneth's Portfolio
        </Link>
        <button
          type="button"
          className={`hamburger${isNavExpanded ? " hamburger-active" : ""}`}
          aria-label={isNavExpanded ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isNavExpanded}
          aria-controls="primary-navigation"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="hamburger-bar" aria-hidden="true" />
          <span className="hamburger-bar" aria-hidden="true" />
          <span className="hamburger-bar" aria-hidden="true" />
        </button>
        <div
          id="primary-navigation"
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            {renderNavLink("about", "About")}
            {renderNavLink("skills", "Skills")}
            {renderNavLink("projects", "Projects")}
            {/* <li>
              <Link href="/contacts" onClick={closeMenu}>
                Contacts
              </Link>
            </li> */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="navbar-resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
