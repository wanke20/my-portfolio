import { BsFolder2Open, BsGithub } from "react-icons/bs";

type Project = {
  title: string;
  description: string;
  link?: string;
  gitHubLink?: string;
  tech: string[];
};

const projectData: Project[] = [
  {
    title: "Bayesian MLB Prediction System",
    description:
      "Django app predicting MLB game outcomes using Bayesian inference on live MLB API data. Models run distributions and win probabilities with normal and logit-normal frameworks.",
    tech: ["Django", "Python", "Bayesian"],
  },
  {
    title: "Full-Stack Portfolio Website",
    description:
      "The site you're on. Built with Next.js: server-side rendering for fast initial loads, modular React components, and responsive design.",
    link: "https://kennethsportfolio.vercel.app",
    gitHubLink: "https://github.com/wanke20/my-portfolio",
    tech: ["Next.js", "TypeScript", "React"],
  },
  {
    title: "LSTM Stock Price Forecasting",
    description:
      "PyTorch LSTM forecasting NASDAQ closing prices up to 2000 days ahead. Iterative tuning and backpropagation, with Matplotlib comparative training/testing plots.",
    tech: ["PyTorch", "Python", "Matplotlib"],
  },
  {
    title: "Expense Tracker",
    description:
      "A simple Expense Tracker App built with TypeScript, using Firebase to store data. Allows users to input and track total expenses.",
    link: "https://expense-tracker-seven-weld.vercel.app/",
    gitHubLink: "https://github.com/wanke20/expense-tracker",
    tech: ["TypeScript", "Firebase"],
  },
  {
    title: "Books Library App",
    description:
      "A simple Book Library App built with JavaScript. It helps readers have a good list of books they are either currently reading or have finished reading.",
    gitHubLink: "https://github.com/wanke20/edunest",
    tech: ["JavaScript"],
  },
  {
    title: "Battleship Game",
    description:
      "A simple Battleship game which uses command-line prompts. Can be played between two people or against the computer.",
    gitHubLink: "https://github.com/CS-3500-OOD/pa03-wanke20",
    tech: ["Java"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="card-outline">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="item-container">
          {projectData.map((project) => (
            <article key={project.title} className="item">
              <div className="project-header">
                {project.link ? (
                  <a
                    href={project.link}
                    aria-label={`Open live demo of ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFolder2Open className="folder-icon" />
                  </a>
                ) : (
                  <span className="folder-icon-placeholder" aria-hidden>
                    <BsFolder2Open className="folder-icon" />
                  </span>
                )}
                <div className="small-icons">
                  {project.gitHubLink && (
                    <a
                      href={project.gitHubLink}
                      aria-label={`${project.title} on GitHub`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="item-title">{project.title}</h3>
              <p className="item-description">{project.description}</p>
              <ul className="item-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
