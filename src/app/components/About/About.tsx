import "./About.css";

const About = () => {
  return (
    <div className="about-outline">
      <div className="about">
        <h2 className="title">About Me</h2>
        <div className="about-container">
          <div className="description">
            <img src="profile.jpeg" alt="Stock Photo" />
            <p className="text-left">
              I'm a student from Northeastern University with a strong interest
              for coding. I've worked with languages like JavaScript,
              TypeScript, Java, and Python. I've also spent time getting to know
              web development frameworks such as React, Next.js, Express, and
              Node.js. On the database side, I've familiarized myself with
              MongoDB and SQL and design tools including CSS, SASS, and Tailwind
              CSS. While I've gained a good amount of experience, I see myself
              as an ongoing learner, always eager to discover more!
            </p>
          </div>
          <a
            href="https://github.com/wanke20"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            See My Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
