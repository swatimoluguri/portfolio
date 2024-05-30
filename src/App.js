import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import WorkCard from "./components/WorkCard";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import UX from "./components/UX";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <WorkCard />
      <ProjectCard />
      <UX/>
      <AboutMe />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
