import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
} from "react-icons/ai";
function AboutCard() {
  const handleClick = (anchor) => () => {
    console.log("handle click")
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    }
    };
  return (
    <Card className="About-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hossam Ahmed.</span>
            I am fresh software engineer,A frontend developer
            specialized in React.
            <br />
            I am a <span className="purple">Computer Engineering graduate </span> from <span className="purple">Faculty of engineering Cairo unviersity</span>
            <b />
            with experience and <a href="#skills-section" onClick={handleClick("skills")}><span className="purple">skills</span></a> in both <span className="purple">embedded systems and front-end development.</span>
            <br />
            I have a strong background in developing innovative solutions in areas such as <span className="purple">embedded systems and web development.</span>
            <br />
            <br />
            </p>
            <Button 
            style={{margin:"5px"}}
            href={require("../assets/HossamAhmed_Resume.pdf")} 
            download="HossamAhmed"
            target='_blank'>
            
            My Resume
            </Button>
            <Button  style={{color:"white",margin:"5px"}}>
              <Link
                style={{color:"white", textDecoration:"none"}} 
                to="/portfolio/Contact"
              >
                <AiOutlineMail
                    style={{ marginBottom: "2px", marginRight:"2px" }}
                />
                Contact
              </Link>
              </Button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
