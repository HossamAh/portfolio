import laptopImg from '../Assets2/aboutimg.png'
import Particle from "./Particle";
import { Container,Row,Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import TechSkills from './TechSkills';
export default function AboutMe() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Row style={{ justifyContent: "center", padding: "5px" }}>
                <Col
                    md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "20px",
                        paddingBottom: "50px",
                    }}
                >
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                        Know Who <strong className="purple">I'M</strong>
                    </h1>
                    <AboutCard />
                </Col>
                <Col
                    md={5}
                    style={{ paddingTop: "100px", paddingBottom: "50px" }}
                    className="about-img"
                >
                    <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>
            </Row>
            <Row style={{margin:"20px",justifyContent:"center"}}>
                    <Col
                    style={{justifyContent:"center"}}
                    >
                    <TechSkills/>

                    </Col>

                
            </Row>
            {/* <div className="row">
                    <div className="col">
                        <p><span>Hi, I'm Hossam Ahmed <span className="dancing">front-end developer</span> passionate about creating interactive Single page Applications (SAP).</span></p>
                    </div>
                </div>
                <div className="row education">
                    <div className="col">
                        <h3>Education</h3>
                        <p>graduted from Faculty of enginering Cairo university</p>
                        <p>grade:Very Good with honor</p>
                    </div>
                </div>
                <div className="row">
                    <div>
                    <a href={require("../assets/hossamahmedResume.pdf")} className="resume-btn" download="HossamAhmed" target='_blank'>
                    My Resume
                    </a>
                    </div>
                    <div className="col">
                        <SocialMediaNav/>
                    </div>
                    
                </div>
            </div>*/}
        </Container>
    );
}