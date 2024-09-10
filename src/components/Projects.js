import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import restaurant1 from "../assets/images/restaurant-1.png"
import restaurant2 from "../assets/images/restaurant-2.png"
import restaurant3 from "../assets/images/restaurant-3.png"
import calcApp from "../assets/images/calculator.png"
const Projects = () => {
    function handleClick(e) {

        window.open(Project.url, '_blank');
    }
    const hanldeNextImage = ()=>{
        setImageIndex((imageIndex+1)%(Project.imageUrl.length));
    }
    const hanldePrevImage = ()=>{
        setImageIndex((imageIndex-1)>=0?(imageIndex-1):(Project.imageUrl.length-1));
    }
    const hanldeNextProject =()=>{
        setProjectsIndex((projectsIndex+1)%(projectsState.length));
        setProjectState(projectsState[projectsIndex]);
    }
    const hanldePrevProject = ()=>{
        setProjectsIndex((projectsIndex-1)>=0?(projectsIndex-1):(projectsState.length-1));
        setProjectState(projectsState[projectsIndex]);
    }
    const projectsList = [{ imageUrl: [calcApp], url: "https://github.com/HossamAh/ReactJsSimpleCalculator", name: "calculator App", descripion: "simple reactjs calculator project with simple operations." },
    { imageUrl: [restaurant1, restaurant2, restaurant3], url: "https://github.com/HossamAh/Complete-Restaurant-project-", name: "Restaurant App", descripion: "Restaurant webpage with multiple views in single page to include main page and about page and menu page" },
    
    ];

    const [projectsIndex, setProjectsIndex] = useState(0);
    const [projectsState, setProjectsState] = useState(projectsList);
    const [Project, setProjectState] = useState(projectsList[projectsIndex])
    const [imageIndex, setImageIndex] = useState(0)
    
    return (
        <div className="projects-section">
            <div className="projects-container">
                <div ><Link to={'/'} className="projects-close hover-target" /></div>
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project-section">
                        <button className="nextProject tooltip-next-project" onClick={hanldeNextProject}></button>
                        <button className="prevProject tooltip-prev-project" onClick={hanldePrevProject}></button>
                        <div className="project-item tooltip-show-github">
                            <button className="prevImage tooltip-prev-image" onClick={hanldePrevImage}></button>
                            <div className="project" onClick={handleClick}>
                                <img src={Project.imageUrl[imageIndex]} alt="project-fig" />
                                <div>
                                    <h3>{Project.name}</h3>
                                    <p>{Project.descripion}</p>
                                </div>

                            </div>
                            <button className="nextImage tooltip-next-image" onClick={hanldeNextImage}></button>
                        </div>
                    </div>
                    {/* 
                    {projectsList.map((project, index) => {
                        return (<div className="project-item" id={String(index)} onClick={handleClick}>

                            <img src={project.imageUrl} alt="project-fig" />
                            <div>
                                <h3>{project.name}</h3>
                                <p>{project.descripion}</p>
                            </div>

                        </div>
                        )
                    })} */}

                </div>
            </div>
        </div>
    );
}
export default Projects;