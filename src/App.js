import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header"
import Footer from "./sections/footer"
import Projects from "./sections/projects"
import Education from "./sections/education";
import Skills from "./sections/skills"



function App() {
  document.title = "Henry Weng"
  return (
    <div className = "bg-blue-dark">
      <Header />
      <Hero />

      <div id="experience">
        <Experience />
      </div>
      <div className="h-12 md:h-24 lg:h-36 bg-blue-dark"/>

      <div id="projects">
        <Projects />
      </div>
      <div className="h-12 md:h-24 lg:h-36 bg-blue-dark"/>
      {/* Hover outline is 6 */}
      <div className="-mt-6"/>
      {/* Reverses the extra div in projects */}
      <div className="-mt-12"/>

      <div id="education">
        <Education />
      </div>
      <div className="h-12 md:h-24 lg:h-36 bg-blue-dark"/>

      <div id="skills">
        <Skills />
      </div>
      <div className="h-24 md:h-36 lg:h-48 bg-blue-dark"/>

      <Footer/>
    </div>
  );
}

export default App;
