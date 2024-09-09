import { BrowserRouter, Link, Route, Router,Routes,Switch } from "react-router-dom";
import SocialMediaNav from "./SocialMediaNav";

export default function AboutMe() {
    return (
        <div className="about-section">
            <div className="container">
                <div ><Link to={'/'} className="about-close hover-target"/></div>
                <div className="row">
                    <div className="col">
                            <h3>About me</h3>
                    </div>
                </div>
                <div className="row">
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
            </div>
        </div>
    );
}