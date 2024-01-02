import "./Projects.css";

const projectData = [
  {
    title: "Expense Tracker",
    description:
      "A simple Expense Tracker App built with TypeScript, using Firebase to store data. Allows users to input and track total expenses.",
    link: "https://expense-tracker-seven-weld.vercel.app/",
    gitHubLink: "https://github.com/wanke20/expense-tracker",
    image: "expense-tracker.png",
  },
  {
    title: "Books Library App",
    description:
      "A simple Book Library App built with JavaScript. It helps readers have a good list of books they are either currently reading or have finished reading.",
    gitHubLink: "https://github.com/wanke20/edunest",
    image: "books-app.png",
  },
  {
    title: "Battleship Game",
    description:
      "A simple Battleship game which uses command-line prompts. Can be played between two people or against the computer.",
    gitHubLink: "https://github.com/CS-3500-OOD/pa03-wanke20",
    image: "battleship.png",
  },
  {
    title: "Maze Game",
    description:
      "Generates a maze for the player to solve, based on a choice of sizes. A solution can be provided by the computer, if the player wishes to see it.",
    // gitHubLink: "",
    image: "bg.png"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-outline">
      <div className="projects">
      <h2 className="projects-title">
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
                <a href={project.link}>
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                </a>
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
    </div>
  );
};

export default Projects;
