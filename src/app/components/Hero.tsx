const Hero = () => {
  return (
    <div className="hero-outline">
      <div className="hero-container">
        <p className="hero-eyebrow">Software Engineer · AI</p>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-accent">Kenneth Wan</span>
        </h1>
        <p>
          Computer Science student at Northeastern University with an AI
          concentration. I build full-stack apps and machine-learning systems
          in Python, TypeScript, and Java &mdash; recently focused on Bayesian
          modeling, Django, and the OpenAI API.
        </p>
      </div>
      <div className="hero-actions">
        <a
          className="rounded-button"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume →
        </a>
        <a className="rounded-button-outline" href="#projects">
          View Projects →
        </a>
      </div>
    </div>
  );
};

export default Hero;
