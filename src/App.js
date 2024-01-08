import Experiences from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Projects from "./sections/projects";
import Education from "./sections/education";
import Skills from "./sections/skills";
import { Helmet } from "react-helmet";
import React from "react";

function App() {
  return (
    <div className="bg-primary-dark">
      <Helmet>
        <title>Henry Weng</title>
      </Helmet>
      <Header />
      <Hero />

      <div className="flex flex-col space-y-32">
        <div id="experience">
          <Experiences />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="skills">
          <Skills />
        </div>
      </div>

      <div className="h-24 md:h-36 lg:h-48 bg-primary-dark" />

      <Footer />
    </div>
  );
}

export default App;
