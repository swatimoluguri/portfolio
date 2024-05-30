import sked from "../assets/sked1.jpg";
import crisps from "../assets/crisps.jpg";
import Headings from "./Headings";

const UX = () => {
  const project = [
    {
      img: sked,
      heading: "Sked - Task Scheduler",
      tech: ["Figma"],
      details: [
        "Multiple entry points for each process flow.",
        "Functionality to create customized tasks and Repetitive tasks.",
        "Personalized reports to track your progress and analyze performance",
        "Display of all daily assigned tasks on the home screen, ensuring you never miss a task.",
      ],
      live: "https://www.figma.com/proto/FHMOg364a9OrPEWh9pzUrL/high-fidelity-wireframe",
    },
    {
      img: crisps,
      heading: "Crisps - Movie Snack ordering App",
      tech: ["AdobeXD"],
      details: [
        "Convenient Seat and restaurant selection option.",
        "Easy item selection and one click ordering feature",
        "Prioritizing users with a user-centric design with interactive elements that bring it to life.",
        "Ensuring a seamless navigation experience for an effortless user journey.",
      ],
      live: "https://xd.adobe.com/view/e08234a5-3281-458f-9a7f-30cff87d9c1d-b5d1/",
    },
  ];
  return (
    <div className="work-section">
      <Headings
        bg="purple"
        transparent="UX"
        heading="UX"
        highlight="Projects"
      />
      <div className="ux-section">
        {project.map((item) => (
          <div key={item.heading} className="ux-card">
            <div className="ux-card-box">
              <div className="ux-work-img">
                <img src={item.img}  alt={item.heading}/>
              </div>
              <div className="ux-work-desc ">
                <div className="work-tech-stack">
                  {item.tech.map((itm, idx) => (
                    <div key={idx}>{itm}</div>
                  ))}
                </div>
                <div className="work-details">
                  <h1>{item.heading}</h1>
                  <ul>
                    {item.details.map((itm, idx) => (
                      <li key={idx}>{itm}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-links">
                  <div className="button-container">
                    <div className="arrow-circle">
                      <span className="arrow">&rarr;</span>
                    </div>
                    <a
                      href={item.live}
                      target="_blank"
                      className="view-details"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UX;
