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
      <div className="mt-40" />
      <div className="flex flex-col items-center mx-10">
        <div className="flex items-center">
          <div className="w-1/3 mb-5">
            <h1 className="font-bold text-4xl text-slate-900 mb-8">
              My Skills
            </h1>
            <p className="text-slate-900">
              As a full-stack developer, I possess a comprehensive understanding
              of both front-end and back-end technologies, bridging the gap
              between graphical design and technical implementation.
            </p>
          </div>
          <div className="grid grid-cols-4 ml-20">
            {skillList &&
              skillList.map((skill) => (
                <img src={skill.logo} className="h-16 w-auto mb-8 mr-20" />
              ))}
          </div>
        </div>
        <button
          className="flex rounded border-2 text-slate-800 border-black bg-[#facc15] justify-center mt-8 px-8 py-4 hover:bg-white"
          onClick={() => router.push("/about")}
        >
          Read More About Me
        </button>
      </div>
    </>
  );
};

export default Skills;
