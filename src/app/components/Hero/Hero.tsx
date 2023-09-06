import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text">
        <h1 className="title">Hey, I'm Kenny!</h1>
        <p>
          I'm a Computer Science undergrad at Northeastern University. I
          specialize in Java, JavaScript, and TypeScript, and I have a passion
          for building web applications using React and Next.js.
        </p>
      </div>
      <button>
        Click to Download Resume →
      </button>
    </div>
  );
};

export default Hero;
