"use client";

import Contact from "./Contact";
import AboutMe from "./About/AboutButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <h1 className="flex logo text-slate-100">Kenneth's Portfolio</h1>
      <div className="flex items-center">
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
