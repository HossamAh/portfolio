import { Link,Route,Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css';
import { useState } from 'react';
import JSpic from "./assets/images/icons8-javascript-logo-100.png";
import HTMLpic from "./assets/images/icons8-html5-100.png";
import CSSpic from "./assets/images/icons8-css-logo-100.png";
import Reactpic from "./assets/images/logo192.png";
import GITpic from "./assets/images/icons8-git-100.png";
import Pythonpic from "./assets/images/icons8-python-100.png";
import CPPpic from "./assets/images/icons8-c++-100.png";
import Cpic from "./assets/images/icons8-c-programming-100.png";
import bootstrappic from "./assets/images/icons8-bootstrap-100.png";

function App() {
  const skillsList = [{url:JSpic,name:"Javascript"},
    {url:HTMLpic,name:"HTML5"},
    {url:CSSpic,name:"CSS3"},
    {url:Reactpic,name:"ReactJs"},
    {url:bootstrappic,name:"Bootstrap"},
    {url:GITpic,name:"GIT"},
    {url:Pythonpic,name:"Python"},
    {url:CPPpic,name:"C++"},
    {url:Cpic,name:"C"},
  ];
  const [skillsState,setSkillsStatte] = useState(skillsList);
  const projectsList = [{imageUrl:GITpic,url:"https://github.com/HossamAh/ReactJsSimpleCalculator",name:"calculator App", descripion:"simmple reactjs calculator project with simple operations"},
  {imageUrl:Pythonpic,url:"https://github.com/HossamAh/Complete-Restaurant-project-",name:"calculator App", descripion:"simmple reactjs calculator project with simple operations"},
  ];
  const [projectsState,setProjectsStatte] = useState(projectsList);
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to={"/"} className='nav-item'>Homepage</Link>
          <Link to={"/AboutMe"} className='nav-item'>About</Link>
          <Link to={"/Skills"} className='nav-item'>Skills</Link>
          <Link to={"/Projects"} className='nav-item'>Projects</Link>
        </nav>
      </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/AboutMe' element={<AboutMe/>}/>
            <Route path='/Skills' element={<Skills skillsList={skillsState}/>}/>
            <Route path='/Projects' element={<Projects projectsList={projectsState}/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
