import React, { useEffect, useState } from "react";
import { Col,Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiHtml5,
    DiCss3,
    DiBootstrap,
} from "react-icons/di";

import {
    SiRedux,
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
} from "react-icons/si";
import expressJs from '../Assets2/express-js.svg'
export default function TechSkills() {
    const skillsList = [{ icon: ()=><DiJavascript1/>, name: "Javascript" },
        { icon: ()=><DiHtml5/>, name: "HTML5" },
        { icon: ()=><DiCss3/>, name: "CSS3" },
        { icon: ()=><DiReact/>, name: "ReactJs" },
        { icon: ()=><DiBootstrap/>, name: "Bootstrap" },
        { icon: ()=><DiGit/>, name: "GIT" },
        { icon: ()=><DiPython/>, name: "Python" },
        { icon: ()=><CgCPlusPlus/>, name: "C++" },
        { icon: ()=><SiFirebase/>, name: "Firebase" },
        { icon: ()=><SiNextdotjs/>, name: "NextJs" },
        { icon: ()=><SiRedux/>, name: "ReduxJs" },
        { icon: ()=><DiMongodb/>, name: "MongoDb" },
        { icon: ()=><DiNodejs/>, name: "NodeJs" },
        { icon: ()=><SiPostgresql/>, name: "postgresql" },
        { icon: ()=><img src={expressJs} alt="expressjs"/>, name: "ExpressJs" },
        ];
    return (
        <Container fluid className="skills-section">
            <Row style={{justifyContent:"center"}}>
            <h1 className="project-heading">
            Technical <strong className="purple">Skillset </strong>
            </h1>
            </Row>
            <Row style={{justifyContent:"center"}}>
            {skillsList.map((skill)=>{
                return(
                <Col className="tech-icons"
                md={3} 
                xs={4} 
                >
                <Card style={{backgroundColor:"transparent",color:"white"}}>
                <Card.Body style={{justifyContent:"center"}}>
                    {skill.icon()}
                </Card.Body>
                    <Card.Text style={{textAlign:"center",fontSize:"1rem"}}>{skill.name}</Card.Text>
                </Card>
                </Col>
                );
            })}
            </Row>
        </Container>
        
    );
}


