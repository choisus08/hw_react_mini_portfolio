// Icons
import { BsGithub } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";

function Projects(props) {
    return (
        <div className="Projects">

            <div className="Card">
                <ul className="Card-info">
                    <img className="Img" src="proj1.png" alt="Project 1"></img>
                    <li><h3>Beauty Catalog</h3>
                        <div className="Profile-icon">
                            <p><a href="https://github.com/choisus08/project_1-"><BsGithub size="1.5em"/></a></p>
                            <p><a href="https://vercel.com/choisus08/project-1"><BsRocketTakeoff size="1.5em"/></a></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="Card">
                <ul className="Card-info">
                    <img className="Img" src="proj2.png" alt="Project 2"></img>
                    <li><h3>Plant Tracker</h3>
                        <div className="Profile-icon">
                            <p><a href="https://github.com/choisus08/project_2"><BsGithub size="1.5em"/></a></p>
                            <p><a href="https://project2-cio1.onrender.com"><BsRocketTakeoff size="1.5em"/></a></p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Projects;