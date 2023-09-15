import { url } from "inspector";
import image from "next/image";

const projectData = [
  {
    id: 1,
    title: "Todo List App",
    description:
      "A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.",
    gitHubLink: "https://github.com/olawanlejoel/Todo-List-App",
    image: "bg.avif",
  },
  {
    id: 2,
    title: "Books Library App",
    description:
      "A simple Book Library App built with JavaScript. It helps readers have a good list of books they are either currently reading or have finished reading.",
    gitHubLink: "https://github.com/olawanlejoel/Book-Library",
    image: "parallax-image.avif",
  },
  {
    id: 3,
    title: "Quotes Generator",
    description:
      "Helps you generate quotes from about 1600 quotes written by different authors . Quotes are automatically copied to your clipboards.",
    gitHubLink: "https://github.com/olawanlejoel/random-quote-generator",
    image: "bg.webp",
  },
  {
    id: 4,
    title: "Password Generator",
    description:
      "Helps you generates random passwords, you can select what you want your password to entail and also you can copy generated password to clipboard.",
    gitHubLink: "https://github.com/olawanlejoel/Password-Generator",
    image: "bg.png",
  },
  {
    id: 5,
    title: "Twitter UI Clone",
    description:
      "Simple Twitter UI clone built with TailwindCSS and Vue Js. This covers only the homepage of Twitter UI. This is cool to get started with TailwindCSS as it helps understand basic concepts.",
    gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
    image: "bg.jpeg",
  },
];

const Projects = () => {
  return (
    <div className="projects-container mt-48 mx-10 text-white">
      <h2 className="text-3xl mb-16">Projects</h2>
      <div className="grid grid-cols-3 gap-6 projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div
              className="project-card rounded border border-white h-60 px-5 py-5"
              style={{ backgroundImage: `url(${project.image})`}}
              key={project.id}
            >
              <div className="flex justify-between project-header bg-fixed" >
                <i className="fa-regular fa-folder-open folder-icon"></i>
                <div className="small-icons">
                  <a href={project.gitHubLink}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <h3 className="mb-5">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
