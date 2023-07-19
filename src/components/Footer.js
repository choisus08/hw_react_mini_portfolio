// Icons
import { BsChevronCompactUp } from "react-icons/bs";


function Footer(props) {
    return <div className="Footer">
        <div className="Up-arrow">
            <p><BsChevronCompactUp /></p>
        </div>
        <div className="Bottom-navbar">
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    </div>
}

export default Footer;