import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import './App.css'

const App = () => {

  return ( 
    <> 
    <Nav /> 
     <Hero />
      <About />
      <Skills /> 
      <Project /> 
      <Contact /> 
    </>
  )
}

export default App;
