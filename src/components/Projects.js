function Projects(props) {
    return (
        <div className="Projects">
            <div className="Cards">
                <ul className="Card-info">
                    <img className="Img" src="proj1.png" alt="Project 1"></img>
                    <li><h3>Beauty Catalog</h3></li>
                        <p><a href="https://github.com/choisus08/project_1-">Github</a></p>
                        <p><a href="https://vercel.com/choisus08/project-1">Deployment</a></p>
                    <img className="Img" src="proj2.png" alt="Project 2"></img>
                    <li><h3>Plant Tracker</h3></li>
                        <p><a href="https://github.com/choisus08/project_2">Github</a></p>
                        <p><a href="https://project2-cio1.onrender.com">Deployment</a></p>
                </ul>
            </div>

            <div className="Profile-main">
                <h2 className="Profile-name">Susie Gordon</h2>
                <p className="Profile-position">Software Engineer</p>
            </div>
        </div>
    )
}

export default Projects;