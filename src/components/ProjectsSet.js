import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../assets/images/restaurant-1.png"
import restaurant2 from "../assets/images/restaurant-2.png"
import restaurant3 from "../assets/images/restaurant-3.png"
import calcApp from "../assets/images/calculator.png"
import portfolio from "../assets/images/portfolio.png"
import QuranApplication from "../assets/images/QuaranApplication.png"
import Calc from "../assets/images/calc.png"
import TODOS from "../assets/images/todos.png";
import ArabTone from "../assets/images/ArabTone.png";
import Prameg from "../assets/images/Prameg.png";
import Amnco from "../assets/images/Amnco.png";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import {
    AiFillGithub
  } from "react-icons/ai";
import CANCaseStudy from "../assets/images/CAN_Run_interrupt.png"
import AUTOSAR from "../assets/images/AUTOSARproject.png"
import SmartGarage from "../assets/images/SmartGarageprotues.png"
import DMA_UART from "../assets/images/DMA_UART_RUN.png"
// import SecureDoorLockSystem from "../assets/images/githubImage.jpeg"
function ProjectGrid({ List }) {
    return (
        <Row  >
            {List.length<1?<h2 style={{textAlign:"center", color:"white"}}>No projects Available</h2>:null}
            {List.map((Project) => {
                return (
                    <Col key={Project.id} className="project-card"
                        md={6}
                        xs={12}
                    >
                        <Card className="project-card-view" style={{ backgroundColor: "transparent", color: "white" }}>
                            <Card.Body style={{ justifyContent: "center" }}>
                                <img className="fluid-img project_img" src={Project.imageUrl[0]} alt="project" />
                            </Card.Body>
                            <Card.Text style={{ textAlign: "center", fontSize: "1rem" }}>
                                <h2>{Project.name}</h2>
                                <p>{Project.descripion}</p>
                                <div style={{margin:"5px"}}>
                                {Project.liveDemo? <Button style={{margin:"5px"}} onClick={()=>{window.open(Project.liveDemo, '_blank')}}> liveDemo</Button> : null}
                                {Project.Git? <Button  style={{margin:"5px"}} onClick={()=>{window.open(Project.Git, '_blank')}}>
                                    <AiFillGithub style={{ marginBottom: "2px", marginRight:"2px" }}/>Github
                                    </Button> : null}
                                </div>
                    </Card.Text>
            </Card>
            </Col >
            );
})}
        </Row >
    );
}

function ProjectsSet() {
    const projectsList = [
    { id:10,imageUrl: [TODOS],liveDemo:"https://todo-list-app-kohl-kappa.vercel.app/", Git: "https://github.com/HossamAh/todo-list-app", name: "Full-Stack Todo App", descripion: "A secure MERN-based task manager with user authentication and protected CRUD operations.", type: "Web" },
    {id:11, imageUrl: [ArabTone],liveDemo:"https://arabtone-sa.com/", Git: "", name: "ArabTone", descripion: "arabtone website with laravel , Filament Resourses , livewire components , blade views with tailwindCSS styles and MySql for database ", type: "Web" },
    {id:12, imageUrl: [Prameg],liveDemo:"https://next.prameg.net/", Git: "", name: "Prameg", descripion: "Prameg Company website (currently work at) with laravel , Filament Resourses , livewire components , blade views with tailwindCSS styles and MySql for database ", type: "Web" },
    {id:13, imageUrl: [Amnco],liveDemo:"https://amnco.com/", Git: "", name: "Amnco", descripion: "Amnco website with laravel , Filament Resourses , livewire components , blade views with tailwindCSS styles and MySql for database ", type: "Web" },
    
    { id:2,imageUrl: [restaurant1, restaurant2, restaurant3],liveDemo:"https://hossamah.github.io/Complete-Restaurant-project-/", Git: "https://github.com/HossamAh/Complete-Restaurant-project-", name: "Restaurant App", descripion: "Restaurant webpage with multiple views in single page to include main page and about page and menu page", type: "Web" },
    // { id:3,imageUrl: [CANCaseStudy],liveDemo:"", Git: "https://github.com/HossamAh/CAN_CaseStudy", name: "CAN CaseStudy", descripion: "CAN Project to test CAN Loopback mode in both modes polling and interrupt mode", type: "Embedded" },
    { id:4,imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    // { id:5,imageUrl: [AUTOSAR],liveDemo:"", Git: "https://github.com/HossamAh/DoorLockIndication_SWAL_OS", name: "DoorLockIndication_AUTOSAR", descripion: "AUTOSAR project that gets Door Lock Status and Accordingly taking Action to LED.", type: "Embedded" },
    // { id:6,imageUrl: [DMA_UART],liveDemo:"", Git: "https://github.com/HossamAh/secure-communication-with-DMA", name: "secure communication with DMA", descripion: "project developed gateway like ECU that receive messages from inside the network and encrypt it to send to other networks and recevie encrypted messages from outside then decrypt them to send them to the inside network using RSA for encryption and decryption", type: "Embedded" },
    // { id:7,imageUrl: [SmartGarage],liveDemo:"", Git: "https://github.com/HossamAh/Smart-Garage-System-ARM", name: "Smart Garage System", descripion: "Smart Garage system using 2 ARM ECU to monitor garage slots and its door logic", type: "Embedded" },
    { id:8,imageUrl: [QuranApplication],liveDemo:"https://hossamah.github.io/MediaPlayer/", Git: "https://github.com/HossamAh/MediaPlayer", name: "Quran Web application", descripion: "Quran Web application that use isalamic API to fetch quran surahs list and retreive the surahs as an audio and text of each ayah. using HTML,CSS,Javascript and FetchAPI", type: "Web" },
    { id:9,imageUrl: [Calc],liveDemo:"https://hossamah.github.io/CalculatorWeb/", Git: "https://github.com/HossamAh/CalculatorWeb", name: "Simple Arithmatic Calculator", descripion: "Simple calculator using HTML,CSS,Javascript", type: "Web" },
    
    ];

    const [currentList, setCurrentList] = useState([]);
    const [contentState, setContentState] = useState("All");

    useEffect(() => {
        if (contentState === "All") {
            setCurrentList(projectsList);
        }
        else if (contentState === "Web") {
            setCurrentList(projectsList.filter((project) => { return project.type === "Web" }));
        }
        // else if (contentState === "Embedded") {
        //     setCurrentList(projectsList.filter((project) => { return project.type === "Embedded" }));
        // }
        else { }
    }, [contentState]);

    return (
        <Card className="projects-grid">
            {/* <Card.Header style={{ boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)" }}>
                <Nav style={{ justifyContent: "center" }} variant="tabs" defaultActiveKey="#all">
                    <Nav.Item>
                        <Nav.Link  onClick={() => { setContentState("All") }}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setContentState("Web") }}>Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setContentState("Embedded") }}>Embedded</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header> */}
            <Card.Body>
                <Card.Text>
                    <Container fluid >
                        <ProjectGrid List={currentList} />
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectsSet;