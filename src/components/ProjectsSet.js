import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../assets/images/restaurant-1.png"
import restaurant2 from "../assets/images/restaurant-2.png"
import restaurant3 from "../assets/images/restaurant-3.png"
import calcApp from "../assets/images/calculator.png"
import portfolio from "../assets/images/portfolio.png"
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import {
    AiFillGithub
  } from "react-icons/ai";

function ProjectGrid({ List }) {
    return (
        <Row style={{ alignItems: "stretch" }}>
            {List.length<1?<h2 style={{textAlign:"center", color:"white"}}>No projects Available</h2>:null}
            {List.map((Project) => {
                return (
                    <Col className="project-card"
                        md={4}
                        xs={4}
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
    const projectsList = [{ imageUrl: [calcApp],liveDemo:"", Git: "https://github.com/HossamAh/ReactJsSimpleCalculator", name: "calculator App", descripion: "simple reactjs calculator project with simple operations.", type: "Web" },
    { imageUrl: [restaurant1, restaurant2, restaurant3],liveDemo:"https://hossamah.github.io/Complete-Restaurant-project-/", Git: "https://github.com/HossamAh/Complete-Restaurant-project-", name: "Restaurant App", descripion: "Restaurant webpage with multiple views in single page to include main page and about page and menu page", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
    { imageUrl: [portfolio],liveDemo:"https://hossamah.github.io/portfolio/", Git: "https://github.com/HossamAh/portfolio", name: "My portfolio", descripion: "portfolio based on react", type: "Web" },
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
        else if (contentState === "Embedded") {
            setCurrentList(projectsList.filter((project) => { return project.type === "Embedded" }));
        }
        else { }
    }, [contentState]);

    return (
        <Card className="projects-grid">
            <Card.Header style={{ boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)" }}>
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
            </Card.Header>
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