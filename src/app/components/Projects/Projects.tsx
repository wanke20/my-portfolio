import "./Projects.css";

const projectData = [
  {
    title: "Todo List App",
    description:
      "A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.",
    gitHubLink: "https://github.com/wanke20/next-13-todo-list",
    image: "schedule-app.png",
  },
  {
    title: "Books Library App",
    description:
      "A simple Book Library App built with JavaScript. It helps readers have a good list of books they are either currently reading or have finished reading.",
    gitHubLink: "https://github.com/debsouryadatta/academiax",
    image: "books-app.png",
  },
  // {
  //   title: "Quotes Generator",
  //   description:
  //     "Helps you generate quotes from about 1600 quotes written by different authors . Quotes are automatically copied to your clipboards.",
  //   gitHubLink: "https://github.com/olawanlejoel/random-quote-generator",
  //   image: "bg.webp",
  // },
  //  {
  //   title: "Password Generator",
  //   description:
  //     "Helps you generates random passwords, you can select what you want your password to entail and also you can copy generated password to clipboard.",
  //   gitHubLink: "https://github.com/olawanlejoel/Password-Generator",
  //   image: "bg.png",
  // },
  // {
  //   title: "Twitter UI Clone",
  //   description:
  //     "Simple Twitter UI clone built with TailwindCSS and Vue Js. This covers only the homepage of Twitter UI. This is cool to get started with TailwindCSS as it helps understand basic concepts.",
  //   gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
  //   image: "bg.jpeg",
  // },
  {
    title: "Battleship Game",
    description:
      "A simple Battleship game which uses command-line prompts. Can be played between two people or against the computer.",
    gitHubLink: "https://github.com/olawanlejoel/TwitterUI-clone",
    image: "bg.jpeg",
  },
  {
    title: "Maze Game",
    description:
      "Generates a maze for the player to solve. A solution can be provided by the computer, if the player wishes to see it.",
    gitHubLink: "",
    image: "bg.png"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="flex justify-center mb-12 text-white text-4xl font-bold">
        Projects
      </h2>
      <div className="item-container">
        {projectData &&
          projectData.map((project, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="flex justify-between project-header bg-fixed">
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
