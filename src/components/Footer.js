import logo from "../assets/logo_invert.png";
import footer_bg from "../assets/footer_bgv2.png";
import footer_bg_mobile from "../assets/footer_bg.png";
import linkedin from "../assets/linkedin.png";
import call from "../assets/call.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import Headings from "./Headings";
import resume from "../assets/resume.png";

const Footer = () => {
  return (
    <div className="footer">
      <Headings
        bg="purple"
        transparent="Hire Me"
        heading="Let's"
        highlight="Connect"
      />
      <div className="footer-contact">
        <div className="footer-left">
          <img src={logo} alt="swati-logo"/>
          <p>
            I have been developing swatimoluguri.in, and the process has been
            both challenging and rewarding.
          </p>
          <p>
            This website serves as a constant representation of my brand,
            showcasing my professional development. It will always be a work in
            progress, and I am enjoying every bit of it.
          </p>
          <p>
            I love connecting with people from all specialties. Let's connect
            and collaborate on some exciting and challenging projects together.
          </p>
        </div>
        <div className="footer-right">
          <h1>Say hello:</h1>

          <div>
            <img src={mail}  alt="swati-mail"/>
            <a href="mailto:moluguriswati@gmail.com" target="_blank" rel="noopener noreferrer">
              moluguriswati@gmail.com
            </a>
          </div>
          <div>
            <img src={call} alt="swati-call"/>
            <a href="tel:+917337332292" target="_blank" rel="noopener noreferrer">
              +91-7337332292
            </a>
          </div>
          <div>
            <img src={linkedin} alt="swati-linkedin"/>
            <a
              href="https://www.linkedin.com/in/swatimoluguri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <img src={github} alt="swati-github"/>
            <a href="https://github.com/swatimoluguri" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div>
            <img src={resume} alt="swati-resume"/>
            <a href="Swati_Moluguri_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bg">
        <img className="web" src={footer_bg} alt="web-bg"/>
        <img className="mobile" src={footer_bg_mobile} alt="mobile-bg"/>
      </div>
      <div className="footer-copyright">
        <p>
          No copyright issues here, feel free to
          <a href="https://github.com/swatimoluguri/portfolio" target="_blank" rel="noopener noreferrer">
            peek at my code!
          </a>
        </p>
        <p>
          Made with <span className="heart">&#9829;</span> by Swati Moluguri.
        </p>
      </div>
    </div>
  );
};
export default Footer;
