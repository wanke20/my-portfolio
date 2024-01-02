import Hero from "@/app/components/Hero/Hero";
import Skills from "@/app/components/Skills/Skills";
import Projects from "@/app/components/Projects/Projects";
import About from "@/app/components/About/About";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
