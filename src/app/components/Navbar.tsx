"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

const sections = ["about", "skills", "projects"] as const;
type SectionId = (typeof sections)[number];

const Navbar = () => {
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

  const renderNavLink = (id: SectionId, label: string) => (
    <li key={id}>
      <a
        href={`/#${id}`}
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
          Kenneth&apos;s Portfolio
        </Link>
        <div className="nav-right">
          <ul className="nav-links">
            {renderNavLink("about", "About")}
            {renderNavLink("skills", "Skills")}
            {renderNavLink("projects", "Projects")}
          </ul>
          <a
            href="https://github.com/wanke20/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="nav-github"
          >
            <BsGithub aria-hidden />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
