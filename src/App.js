import { Link, Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css';
import { useState, useEffect } from 'react';
import Preloader from './components/preloader';
import Navbar from './components/Navbar'
import JSpic from "./assets/images/icons8-javascript-logo-100.png";
import HTMLpic from "./assets/images/icons8-html5-100.png";
import CSSpic from "./assets/images/icons8-css-logo-100.png";
import Reactpic from "./assets/images/logo192.png";
import GITpic from "./assets/images/icons8-git-100.png";
import Pythonpic from "./assets/images/icons8-python-100.png";
import CPPpic from "./assets/images/icons8-c++-100.png";
import Cpic from "./assets/images/icons8-c-programming-100.png";
import bootstrappic from "./assets/images/icons8-bootstrap-100.png";
import NavBar from './components/Navbar';
import './style.css'
import Footer from './components/Footer';
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const skillsList = [{ url: JSpic, name: "Javascript" },
  { url: HTMLpic, name: "HTML5" },
  { url: CSSpic, name: "CSS3" },
  { url: Reactpic, name: "ReactJs" },
  { url: bootstrappic, name: "Bootstrap" },
  { url: GITpic, name: "GIT" },
  { url: Pythonpic, name: "Python" },
  { url: CPPpic, name: "C++" },
  { url: Cpic, name: "C" },
  ];
  const [skillsState, setSkillsStatte] = useState(skillsList);


  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/portfolio/' element={<HomePage />} />
          <Route path='/portfolio/AboutMe' element={<AboutMe />} />
          <Route path='/portfolio/Contact' element={<Contact />} />
          <Route path='/portfolio/Projects' element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
