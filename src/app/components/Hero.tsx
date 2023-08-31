
import ReadMore from "./ReadMore";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text text-center px-20 py-48 mb-10 text-slate-100">
        <h1 className="font-bold pb-6 text-4xl">Hey, I'm Kenny!</h1>
        <p>
          I'm a Computer Science undergrad at Northeastern University. I
          specialize in Java, JavaScript, and TypeScript, and I have a passion
          for building web applications using React and Next.js.
        </p>
        <ReadMore />
      </div>
    </div>
  );
};

export default Hero;
