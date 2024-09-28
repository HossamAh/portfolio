import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../assets/images/restaurant-1.png"
import restaurant2 from "../assets/images/restaurant-2.png"
import restaurant3 from "../assets/images/restaurant-3.png"
import calcApp from "../assets/images/calculator.png"
import { Container,Row,Col } from "react-bootstrap";
import Particle from "./Particle";
import ProjectsSet from "./ProjectsSet";
const Projects = () => {
    function handleClick(e) {
        window.open(Project.url, '_blank');
    }
    const hanldeNextImage = ()=>{
        console.log(imageIndex);
        setImageIndex((imageIndex+1)%(Project.imageUrl.length));
        console.log(imageIndex);
    }
    const hanldePrevImage = ()=>{
        console.log(imageIndex);
        setImageIndex((imageIndex-1)>=0?(imageIndex-1):(Project.imageUrl.length-1));
        console.log(imageIndex);
    }
    const hanldeNextProject =()=>{
        console.log(projectsIndex);
        console.log(`exp: ${(projectsIndex+1)%(projectsState.length)}`)
        setProjectsIndex((projectsIndex+1)%(projectsState.length));
        setProjectState(projectsState[(projectsIndex+1)%(projectsState.length)]);
        console.log(projectsIndex);
    }
    const hanldePrevProject = ()=>{
        console.log(projectsIndex);
        setProjectsIndex((projectsIndex-1)>=0?(projectsIndex-1):(projectsState.length-1));
        setProjectState(projectsState[(projectsIndex-1)>=0?(projectsIndex-1):(projectsState.length-1)]);
        console.log(projectsIndex);
    }
    const projectsList = [{ imageUrl: [calcApp], url: "https://github.com/HossamAh/ReactJsSimpleCalculator", name: "calculator App", descripion: "simple reactjs calculator project with simple operations." },
    { imageUrl: [restaurant1, restaurant2, restaurant3], url: "https://github.com/HossamAh/Complete-Restaurant-project-", name: "Restaurant App", descripion: "Restaurant webpage with multiple views in single page to include main page and about page and menu page" },
    
    ];

    const [projectsIndex, setProjectsIndex] = useState(0);
    const [projectsState, setProjectsState] = useState(projectsList);
    const [Project, setProjectState] = useState(projectsList[projectsIndex])
    const [imageIndex, setImageIndex] = useState(0)
    
    return (
        <Container fluid className="project-section" style={{padding:"50px"}}>
            <Particle/>
            <Row style={{justifyContent:"center",textAlign:"center"}}>
            <h1 className="project-heading">
            Recent <strong className="purple">Projects </strong>
            </h1>
            </Row>
            <Row  style={{justifyContent:"center",padding:"10px"} } >
                <ProjectsSet/>                                             
            </Row>
        </Container>
        
    );
}
export default Projects;