import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import WorkCard from "./components/WorkCard";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <WorkCard />
      <ProjectCard />
      <AboutMe />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
