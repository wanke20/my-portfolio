"use client";

import Contact from "./Contact";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center mt-5">
        <div className="flex logo text-slate-100">Kenneth's Portfolio</div>
        {/* <a
          href="/contact"
          className="text-black bg-yellow-400 font-medium mx-8 px-4 py-1 rounded
          hover:bg-yellow-500 focus-within:bg-yellow-500 outline-none"
        >
          Contact Me
        </a> */}
        <Contact />
      </div>
    </>
  );
};

export default Navbar;
