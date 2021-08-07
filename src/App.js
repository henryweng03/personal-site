import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header"
import Projects from "./sections/projects"
import Skills from "./sections/skills"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <div className="h-12 md:h-24 lg:h-36 bg-blue-dark"></div>
      <div id="projects">
        <Projects />
      </div>
      <div className="h-12 md:h-24 lg:h-36 -mt-6 bg-blue-dark"></div>
      <div id="skills">
        <Skills />
      </div>
      <div className="h-12 md:h-24 lg:h-36 bg-blue-dark"></div>
    </div>
  );
}

export default App;
