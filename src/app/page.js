import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <ToolsMarquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
