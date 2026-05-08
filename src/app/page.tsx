import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Reveal from "@/app/components/Reveal";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <div className="card-container">
        <section id="about">
          <Reveal>
            <About />
          </Reveal>
        </section>
        <section id="skills">
          <Reveal delay={80}>
            <Skills />
          </Reveal>
        </section>
        <section id="projects">
          <Reveal delay={160}>
            <Projects />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
