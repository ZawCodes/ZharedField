import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import ReactGA from "react-ga4";

function App() {
  // ReactGA.initialize("G-H6LTXTTNLJ");
  // ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });

  return (
    <>
      <Main />
      <About />
      <Skill />
      <Work />
      <Project />
      <Contact />
    </>
  );
}

export default App;
