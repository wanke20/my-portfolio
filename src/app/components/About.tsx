import Image from "next/image";

const About = () => {
  return (
    <div className="card-outline">
      <h2 className="title">About Me</h2>
      <div className="profile">
        <Image
          src="/profile.jpeg"
          alt="Kenneth Wan, Computer Science student at Northeastern University"
          width={240}
          height={240}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsr68HAAL+AX7vOF2TAAAAAElFTkSuQmCC"
        />
        <p className="profile-text">
          I'm a student from Northeastern University with a strong interest for
          coding. I've worked with languages like JavaScript, TypeScript, Java,
          and Python. I've also spent time getting to know web development
          frameworks such as React, Next.js, Express, and Node.js. On the
          database side, I've familiarized myself with MongoDB and SQL and
          design tools including CSS, SASS, and Tailwind CSS. While I've gained
          a good amount of experience, I see myself as an ongoing learner,
          always eager to discover more!
        </p>
      </div>
      <a
        href="https://github.com/wanke20"
        className="rigid-button"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        See My Github Profile
      </a>
    </div>
  );
};

export default About;
