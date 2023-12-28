"use client";
import "./Skills.css";

const skillList = [
  { name: "JavaScript", logo: "logos/js-logo.png" },
  { name: "TypeScript", logo: "logos/ts-logo.jpeg" },
  { name: "Java", logo: "logos/java-logo.png" },
  { name: "Python", logo: "logos/python-logo.png" },
  { name: "React", logo: "logos/react-logo.png" },
  { name: "NextJS", logo: "logos/nextjs-logo.webp" },
  { name: "NodeJS", logo: "logos/nodejs-logo.webp" },
  { name: "MongoDB", logo: "logos/mongodb-logo.png" },
  { name: "MySQL", logo: "logos/mysql-logo.png" },
  { name: "CSS", logo: "logos/css-logo.webp" },
  { name: "SASS", logo: "logos/sass-logo.png" },
  { name: "TailwindCSS", logo: "logos/tailwind-logo.png" },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center mx-10">
      <div className="flex items-center justify-center">
        <div className="justify-center mb-5">
          <h1 className="flex justify-center font-bold text-4xl text-white">
            My Skills
          </h1>
        </div>
      </div>
      <div className="skills-container">
        {skillList && skillList.map((skill) => 
          <div className="skills-card">
            <img src={skill.logo} />
            <h1>{skill.name}</h1>
          </div>
        )}
      </div>
      {/* <button className="skills-button">
        See My Work History
      </button> */}
    </div>
  );
};

export default Skills;