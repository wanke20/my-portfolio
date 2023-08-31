const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="my-16 mt-28 text-3xl">Skills</h1>
      <div className="flex my-10 grid-skills">
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 skill-card html">
          <i className="text-brand-html mr-2 fa-brands fa-html5 fa-xl html-icon"></i>
          <p className="text-xs">HTML</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card css">
          <i className="text-brand-css mr-2 fa-brands fa-css3-alt fa-xl css-icon"></i>
          <p className="text-xs">CSS</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card js">
          <i className="text-brand-js mr-2 fa-brands fa-js-square fa-xl js-icon"></i>
          <p className="text-xs">JavaScript</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card react">
          <i className="text-brand-react mr-2 fa-brands fa-react fa-xl react-icon"></i>
          <p className="text-xs">React</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card node">
          <i className="text-brand-node mr-2 fa-brands fa-node-js fa-xl node-icon"></i>
          <p className="text-xs">Node</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card python">
          <img
            src="python-logo-only.png"
            className="mr-2"
            style={{ width: 27, height: 27 }}
          ></img>
          <p className="text-xs">Python</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center rounded border-2 border-black px-4 py-5 mr-16 skill-card java">
          <i className="text-brand-html mr-2 fa-brands fa-java fa-xl html-icon"></i>
          <p className="text-xs">Java</p>
        </div>
        <div className="flex items-center rounded border-2 border-black px-4 py-3 mr-16 sskill-card typescript">
          <img
            src="ts-logo-128.png"
            className="mr-2"
            style={{ width: 27, height: 27 }}
          ></img>
          <p className="text-xs">TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
