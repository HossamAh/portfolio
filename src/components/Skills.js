import { Link } from "react-router-dom";
const Skills = ({ skillsList = [] }) => {
    console.log(skillsList[0].url)
    return (
        <div className="skills-section">
            <div className="Skills-container">
                <div ><Link to={'/portfolio/'} className="skills-close hover-target" /></div>
                <h2>Technical Skills</h2>
                <div className="Skills-grid">
                    {skillsList.map((skill) => {
                        return (<div className="skill-item">
                            <figure>
                                <img src={skill.url} alt="skill-fig" />
                                <figcaption>{skill.name}</figcaption>
                            </figure>
                        </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
}
export default Skills;