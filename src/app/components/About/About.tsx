import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <img src="profile.jpeg" alt="Stock Photo" />
        <p className="text-left">
          Hi! I'm a student from Northeastern University with a strong interest
          for coding. At Northeastern, I've had the opportunity to learn about a
          range of programming languages and tools. I've worked with languages
          like JavaScript, TypeScript, Java, and Python. I've also spent time
          getting to know web development frameworks such as React, Next.js,
          Express, and Node.js. On the database side, I've familiarized myself
          with MongoDB and SQL and have used design tools including CSS, SASS, 
          and Tailwind CSS. While I've gained a good amount of experience, I see 
          myself as an ongoing learner, always eager to discover more! Looking 
          ahead, I'm keen on exploring the practical applications of my skills in 
          real-world scenarios. I believe the true test for a developer is in 
          tackling unforeseen challenges and adapting to ever-evolving 
          technological landscapes. In my spare time, I enjoy participating 
          in hackathons, following sports like football and basketball, and 
          playing chess.
        </p>
      </div>
      <a 
        href="https://github.com/wanke20" 
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer">See My Github Profile</a>
    </div>
  );
};

export default About;
