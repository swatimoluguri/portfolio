import Headings from "./Headings";

const AboutMe = () => {
  const year = 2016;
  const current = new Date().getFullYear();
  const exp = current - year;
  return (
    <div className="about-me-section">
      <Headings
        bg="white"
        transparent="About Me"
        heading="About"
        highlight="Me"
      />
      <div className="section-about-me">
        <div className="box-about-me">
          <div className="about-me">
            <div className="about-me_name">Swati Moluguri</div>
            <div className="about-me_experience">
              <div className="about-me_experience_number">{exp}</div>
              <div className="about-me_experience_text">
                Years of Experience
              </div>
            </div>
          </div>
          <div className="about-me_details">
            <h1>
              Who is <span className="cursive">Swati Moluguri?</span>
            </h1>
            <p>
              I am a software developer specializing in
              <b>
                mobile and web applications for e-commerce, banking, and
                business operations.
              </b>
              <br />
              <br />I have built and managed
              <b>three of my own startup ventures from scratch</b>, gaining
              extensive experience in both development and business management
              for over 5 years. I had to shut down operations due to COVID-19.
              <br />
              <br />
              Later, I served in a PSU entity for more than 2 years as an
              Assistant Manager in the Information Technology department and
              developed several <b>in-house products for the bank.</b>
            </p>
            <div className="work-links">
              <div className="about-me-button-container">
                <div className="about-me-arrow-circle">
                  <span className="about-me-arrow">&rarr;</span>
                </div>
                <a href={`Swati_Moluguri_Resume.pdf`} target="_blank" className="about-me-view-details" rel="noopener noreferrer">
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
