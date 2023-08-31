"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Skills from "./Skills";
import Projects from "./Projects";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="mx-10">
        <main>{children}</main>
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
