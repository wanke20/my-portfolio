"use client";
import "./Skills.css";

const skillList = [
  { id: 1, name: "JavaScript", logo: "logos/js-logo.png" },
  { id: 2, name: "TypeScript", logo: "logos/ts-logo.jpeg" },
  { id: 3, name: "Java", logo: "logos/java-logo.png" },
  { id: 4, name: "Python", logo: "logos/python-logo.png" },
  { id: 5, name: "React", logo: "logos/react-logo.png" },
  { id: 6, name: "NextJS", logo: "logos/nextjs-logo.webp" },
  { id: 7, name: "NodeJS", logo: "logos/nodejs-logo.webp" },
  { id: 8, name: "MongoDB", logo: "logos/mongodb-logo.png" },
  { id: 9, name: "MySQL", logo: "logos/mysql-logo.png" },
  { id: 10, name: "CSS", logo: "logos/css-logo.webp" },
  { id: 11, name: "SASS", logo: "logos/sass-logo.png" },
  { id: 12, name: "TailwindCSS", logo: "logos/tailwind-logo.png" },
];

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <h1 className="title">
        My Skills
      </h1>
      <div className="skills-container">
        {skillList && skillList.map((skill) => 
          <div key={skill.id} className="skills-card">
            <img src={skill.logo} />
            <p>{skill.name}</p>
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
