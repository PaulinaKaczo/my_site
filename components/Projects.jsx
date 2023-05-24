import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

function Projects() {
    return (
        <section id="projects" className="projects_container">
            <div className="projects_wrapper">
                <h2>PROJECTS</h2>
                <div className="project">
                    <img src="../images/skynet.png" title="Skynet" alt="Skynet"/>
                    <div className="project_details">
                        <h3>Skynet</h3>
                        <p>Skynet is a search engine for movies and TV series depending on the genre. The API from The Movie Database is used for this. The user can search through hundreds of pages, add a given movie/TV series to the list of favorites by clicking the heart icon, and remove it from the list by clicking the trash icon. In addition, the user, after clicking on a particular item, receives detailed information, such as a short description, average rating, number of ratings, and the ability to add your own rating.</p>
                        <p><strong>Used technologies:</strong></p>
                        <ul className="technologies_used--list">
                            <li>React.js</li>
                            <li>Sass</li>
                            <li>Rest API</li>
                            <li>Material UI</li>
                            <li>RWD</li>
                        </ul>
                        <div className="demo_code">
                            <a href="https://skynet-8775e.web.app/">
                                <FontAwesomeIcon icon={faLink} /> Demo </a>
                            <a href="https://github.com/PaulinaKaczo/search_movies">
                                <FontAwesomeIcon icon={faGithub} /> Code </a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <img src="../images/car-sharing.png" title="Car sharing" alt="Car sharing"/>
                    <div className="project_details">
                        <h3>Car Sharing</h3>
                        <p> Car sharing is one of my first course projects. The website is created using pure HTML and CSS. It contains a form, buttons with a hover state and pseudo-elements (before and after). The website is fully responsive.</p>
                        <p><strong>Used technologies:</strong></p>
                        <ul className="technologies_used--list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>RWD</li>
                        </ul>
                        <div className="demo_code">
                            <a href="https://car-sharing-pk.netlify.app/">
                                <FontAwesomeIcon icon={faLink} /> Demo </a>
                            <a href="https://github.com/PaulinaKaczo/car_sharing">
                                <FontAwesomeIcon icon={faGithub} /> Code </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;