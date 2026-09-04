import { useCallback, useState } from "react";
import "./lib/scroll";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  return (
    <div className="bg-ink font-grotesk text-paper antialiased selection:bg-acid selection:text-ink">
      <CustomCursor />
      <Preloader onComplete={handleComplete} />
      <Navbar ready={ready} />
      <main>
        <Hero start={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <div className="noise-overlay" />
    </div>
  );
}
