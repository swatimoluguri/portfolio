import weather from "../assets/weather.jpg";
import dino from "../assets/dino-game.jpg";
import hotel from "../assets/hotel.jpg";
import Headings from "./Headings";

const ProjectCard = () => {
  const project = [
    {
      img: weather,
      heading: "Weather Forecast India",
      details: [
        "Real-time weather updates through integration with reliable weather APIs.",
        "5-day city-wise weather forecasts.",
      ],
      live: "/weather-clock",
      github: "https://github.com/swatimoluguri/weather-app",
    },
    {
      img: hotel,
      heading: "Hotel Booking App",
      details: [
        "Template design for a hotel booking app.",
        "Cities API for auto-suggestion, along with a date range selection option.",
      ],
      live: "/book-my-hotel",
      github: "https://github.com/swatimoluguri/book-my-hotel",
    },
    {
      img: dino,
      heading: "Chrome Dino Game",
      details: [
        "A clone of the original game in the Google Chrome browser, where an endless runner dinosaur avoids obstacles like cacti and birds.",
      ],
      live: "/dino-game",
      github: "https://github.com/swatimoluguri/dino-game",
    },
  ];
  return (
    <div className="projects">
      <Headings
        bg="purple"
        transparent="Projects"
        heading="Mini"
        highlight="Projects"
      />
      <div className="project-section">
        {project.map((item) => (
          <div key={item.heading} className="project-card">
            <div className="project-box">
              <div className="project-img">
                <img src={item.img} />
              </div>
              <div className="project-desc">
                <div className="project-details">
                  <h2>{item.heading}</h2>
                  <ul>
                    {item.details.map((itm, idx) => (
                      <li key={idx}>{itm}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="work-links">
                <div className="button-container">
                  <div className="arrow-circle">
                    <span className="arrow">&rarr;</span>
                  </div>
                  <a href={item.live} target="_blank" className="view-details">
                    Demo
                  </a>
                </div>
                <div className="button-container">
                  <div className="arrow-circle">
                    <span className="arrow">&rarr;</span>
                  </div>
                  <a
                    href={item.github}
                    target="_blank"
                    className="view-details"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
