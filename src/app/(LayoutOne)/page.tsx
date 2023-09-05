import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center">
      </header>
      <Navbar />
      <div className="mx-10">
        {/* <main>{children}</main> */}
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
