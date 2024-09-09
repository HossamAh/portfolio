import { Link, Routes } from "react-router-dom";
import ProfleImage from "../assets/images/me.jpeg"
function AboutClickHandler() {
    let body = document.getElementsByClassName("body")[0]
    console.log("about on");
    body.setAttribute("class", "about-on");

}
export default function HomePage() {
    return (
        <div className="body">
            <div className="hero-section" >
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img className="my-image" src={ProfleImage} alt="my profile" />
                            </div>
                            <div className="col-12">
                                <h1>Hossam Ahmed</h1>
                                <div className="dancing">software engineer</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p >
                                    <Link to={'/'} className="HomePage hover-target" ><span >Homepage</span></Link>
                                    <Link to={'/AboutMe'} className="about hover-target" onClick={AboutClickHandler}><span >About</span></Link>
                                    <Link to={'/Skills'} className="skills hover-target"><span>Skills</span></Link>
                                    <Link to={'/Projects'} className="projects hover-target"><span>Projects</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
