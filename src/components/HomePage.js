import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets2/home-main.svg";
import Particle from "../components/Particle";
import Home2 from "./Home2";
import Type from "./Type";

export default function HomePage() {
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
        <section style={{position:"relative" , zIndex:"0"}}>
            <Container fluid className="home-section" id="home">
                {/* white particles in backgroud */}
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <a  onClick={handleClick("about")}>
                                <strong className="main-name"> HOSSAM AHMED</strong>
                                </a>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}
