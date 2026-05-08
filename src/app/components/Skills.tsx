import Image from "next/image";

const skillList = [
  { id: 1, name: "JavaScript", logo: "/logos/js-logo.png" },
  { id: 2, name: "TypeScript", logo: "/logos/ts-logo.jpeg" },
  { id: 3, name: "Java", logo: "/logos/java-logo.png" },
  { id: 4, name: "Python", logo: "/logos/python-logo.png" },
  { id: 5, name: "React", logo: "/logos/react-logo.png" },
  { id: 6, name: "NextJS", logo: "/logos/nextjs-logo.webp" },
  { id: 7, name: "NodeJS", logo: "/logos/nodejs-logo.webp" },
  { id: 8, name: "MongoDB", logo: "/logos/mongodb-logo.png" },
  { id: 9, name: "MySQL", logo: "/logos/mysql-logo.png" },
  { id: 10, name: "PostreSQL", logo: "/logos/postgres-logo.png" },
  { id: 11, name: "CSS", logo: "/logos/css-logo.webp" },
  { id: 12, name: "SASS", logo: "/logos/sass-logo.png" },
  { id: 13, name: "Tailwind", logo: "/logos/tailwind-logo.png" },
  { id: 14, name: "Django", logo: "/logos/django-logo.svg" },
  { id: 15, name: "PyTorch", logo: "/logos/pytorch-logo.png" },
  { id: 16, name: "R", logo: "/logos/r-logo.png" },
  { id: 17, name: "Sklearn", logo: "/logos/sklearn-logo.png" },
  { id: 18, name: "Azure", logo: "/logos/azure-logo.png" },
  { id: 19, name: "C", logo: "/logos/c-logo.png" },
];

const Skills: React.FC = () => {
  return (
    <div className="card-outline">
      <h2 className="title">My Skills</h2>
      <div className="skills-container">
        {skillList.map((skill) => (
          <div key={skill.id} className="skills-card">
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={24}
              height={24}
              // placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsr68HAAL+AX7vOF2TAAAAAElFTkSuQmCC"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
