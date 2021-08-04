import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <Experience />
      <Experience />
    </div>
  );
}

export default App;
