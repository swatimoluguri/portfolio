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
          <li>
            <Link to="work-section" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="about-me-section" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
