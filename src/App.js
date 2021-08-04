import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header"
import Projects from "./sections/projects"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
