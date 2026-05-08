import Image from "next/image";
import { BsGithub } from "react-icons/bs";

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
        <div className="profile-body">
          <ul className="profile-stats">
            <li>Boston, MA</li>
            <li>Khoury College</li>
            {/* <li>3.8 GPA</li> */}
            <li>AI Concentration</li>
          </ul>
          <p className="profile-text">
            I earned my BS in Computer Science with an AI concentration from
            Northeastern&apos;s Khoury College in December 2025, and I&apos;m
            continuing into the Master&apos;s program through December 2027.
            Earlier in 2025, I spent six months as an AI Co-op at Northeastern
            IT, shipping production AI features built on Microsoft Azure and
            the OpenAI API. Since 2023, I&apos;ve also been the Web Developer
            for Northeastern Electric Racing, maintaining team-facing tools in
            TypeScript and React. Outside of code, I follow baseball,
            basketball, and chess.
          </p>
        </div>
      </div>
      <a
        href="https://github.com/wanke20"
        className="rigid-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub aria-hidden /> View on GitHub
      </a>
    </div>
  );
};

export default About;
