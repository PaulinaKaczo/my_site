import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

function Hero() {
  return (
    <section id="hero" className="hero_container">
      <div className="hero_wrapper">
        <div className="text_box">
          <h1>Hi! I'm Paulina Kaczorowska</h1>
          <p>
            I am a passionate junior frontend developer who is dedicated to
            continuous growth and learning in the field of web development.
          </p>
          <p>I live in Dąbrowa Górnicza, Poland.</p>
          <div className="social_media_wrapper">
            <span>
              <a
                href="https://github.com/PaulinaKaczo"
                title="github profile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/paulina-kaczorowska-b246801a1/"
                title="linkedin profile"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </span>


          </div>
          <div className="tech_stack_wrapper">
            <span>Techstack</span>
            <div className="tech_stack_box">
              <ul className="tech_stack_box--list">
                <li title="HTML5">
                  <img src="../images/html-icon.png" alt="HTML5 logo" />
                </li>
                <li title="CSS3">
                  <img src="../images/css-icon.png" alt="CSS3 logo" />
                </li>
                <li title="Sass">
                  <img src="../images/sass-icon.png" alt="Sass logo" />
                </li>
                <li title="JavaScript">
                  <img src="../images/javascript-icon.png" alt="JavaScript logo" />
                </li>
                <li title="React.js">
                  <img src="../images/react-js-icon.png" alt="React.js logo" />
                </li>
                <li title="RWD">
                  <img src="../images/rwd.png" alt="RWD logo" />
                </li>
                <li title="Rest API">
                  <img src="../images/rest-api-icon.png" alt="Rest API logo" />
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="img_box">
          <img
            className="hero_img"
            src="../images/hero_photo.jpg"
            alt="Image by vectorjuice on Freepik"
            title="Image by vectorjuice on Freepik"
          />
        </div>
        <div className="cv_btn">
          <a href="https://drive.google.com/file/d/105RCXIGIWj8Df3Afk9DENgmhSASTXfpO/view?usp=share_link" title="CV">CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
