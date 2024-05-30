import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo-img">
        <img src={logo} alt="logo-img" />
      </div>
      <div>
        <ul className="nav-links">
          <Link to="work-section" smooth={true} duration={500}>
            <li>Work</li>
          </Link>
          <Link to="about-me-section" smooth={true} duration={500}>
            <li>Experience</li>
          </Link>
          <Link to="footer" smooth={true} duration={500}>
            <li>Contact Me</li>
          </Link>
          <a
            href="Swati_Moluguri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
