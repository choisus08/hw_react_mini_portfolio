// Icons
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Header(props) {
    return (
    <div className="Header">

        <div className="Profile-main">
            <h2 className="Profile-name">Susie Gordon</h2>
            <p className="Profile-position">Full-stack Software Engineer</p>
        </div>

        <ul className="Navbar">
            <li><a href="https://github.com/choisus08?tab=repositories"><BsGithub className="Icon" color="lightblue" size="1.8em"/></a></li>
            <li><a href="https://www.linkedin.com/in/gordon-susie/"><BsLinkedin className="Icon" color="lightblue" size="1.8em" /></a></li>
        </ul>
    </div>
    )
}

export default Header;