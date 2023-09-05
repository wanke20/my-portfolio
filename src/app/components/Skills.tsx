"use client";
import { useRouter } from "next/navigation";

const skillList = [
  { name: "CSS", logo: "logos/css-logo.webp" },
  { name: "TypeScript", logo: "logos/ts-logo.jpeg" },
  { name: "JavaScript", logo: "logos/js-logo.png" },
  { name: "Java", logo: "logos/java-logo.png" },
  { name: "NodeJS", logo: "logos/nodejs-logo.png" },
  { name: "React", logo: "logos/react-logo.png" },
  { name: "NextJS", logo: "logos/nextjs-logo.webp" },
  { name: "TailwindCSS", logo: "logos/tailwind-logo.png" },
  { name: "MongoDB", logo: "logos/mongo.png" },
  { name: "SQL", logo: "logos/sql.jpeg" },
];

const Skills = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-64" />
      <div className="flex items-center">
        <div className="w-1/3">
          <h1 className="font-bold text-4xl text-slate-900 mb-8">My Skills</h1>
          <p className="mb-5">
            As a full-stack developer, I possess a comprehensive understanding
            of both front-end and back-end technologies, bridging the gap
            between graphical design and technical implementation.
          </p>
          <button className="rounded border-2 border-black px-4 py-2 hover:bg-slate-100"
          onClick={() => router.push('/about')}>
            Read My Intro
          </button>
        </div>
        <div className="grid grid-cols-4 ml-20">
          {skillList &&
            skillList.map((skill) => (
              <img src={skill.logo} className="h-16 w-auto mb-8 mr-20" />
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
