import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact" className="contact_container">
      <div className="contact_wrapper">
        <h2>CONTACT</h2>
        <p className="contact_info">
          If you are interested in my profile, please contact me:
        </p>
        <div className="contact_details_list">
          <div className="contact_details">
            <a
              href="https://www.linkedin.com/in/paulina-kaczorowska-b246801a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn{" "}
            </a>
            <p>Paulina Kaczorowska</p>
          </div>
          <div className="contact_details">
            <a href="mailto:p-cioch@wp.pl" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              E-mail
            </a>
            <p>p-cioch@wp.pl</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
