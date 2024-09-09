import { useRef } from "react";
import { Link } from "react-router-dom";

const Projects = ({ projectsList = [] }) => {
    const project_item=useRef()
    function handleClick(e)
    {
        console.log(e)
        console.log(e.currentTarget.getAttribute('id'));
        let index = Number(e.currentTarget.getAttribute('id'));
        console.log(projectsList[index].url);
        window.open(projectsList[index].url, '_blank');
    }
    return (
        <div className="projects-section">
            <div className="projects-container">
                <div ><Link to={'/'} className="projects-close hover-target" /></div>
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectsList.map((project,index) => {
                        return (<div className="project-item" id={String(index)}  onClick={handleClick}>
                            
                            <img src={project.imageUrl} alt="project-fig" />
                            <div>
                                <h3>{project.name}</h3>
                                <p>{project.descripion}</p>
                            </div>
                            
                        </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}
export default Projects;