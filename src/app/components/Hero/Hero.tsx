import DownloadResume from './DownloadResume';

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="hero-text text-center mx-20 my-44 mb-10 text-slate-100">
        <h1 className="font-bold pb-6 text-4xl">Hey, I'm Kenny!</h1>
        <p>
          I'm a Computer Science undergrad at Northeastern University. I
          specialize in Java, JavaScript, and TypeScript, and I have a passion
          for building web applications using React and Next.js.
        </p>
      </div>
      <DownloadResume />
    </div>
  );
};

export default Hero;
