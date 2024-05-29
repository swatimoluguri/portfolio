import Shoppy from "../assets/shoppy.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import freshneeds from "../assets/freshneeds.jpg";
import Headings from "./Headings";

const WorkCard = () => {
  const project = [
    {
      img: Shoppy,
      tech: ["React", "ExpressJS", "NodeJS", "MongoDB", "TailwindCSS"],
      heading: "Shoppy - An e-commerce website",
      details: [
        "Product listings powered by fakestoreAPI, Real-time currency exchange using currency exchange API.",
        "Cart and user state management with Redux toolkit and persist.",
        "Secure login with JWTs and encrypted passwords, featuring 2FA via Mail OTP for password resets.",
        "Integration of payment gateway and verification.",
        "User order history tracking.",
        "User-friendly and responsive web design utilizing tailwind CSS.",
        "Comprehensive e-commerce operations including product filtering, relevant product suggestions, adjustable quantity in cart, form validations, conditional rendering, reusable components, and dynamic data fetching for optimized performance.",
      ],
      live: "/shoppy",
      github: "https://github.com/swatimoluguri/e-commerce",
    },
    {
      img: tictactoe,
      tech: ["React", "SocketIO", "NodeJS"],
      heading: "Tic Tac Toe - Online multiplayer game",
      details: [
        "Real-time Multiplayer Action using SocketIO.",
        "Attractive, clean, and responsive design.",
        "Grid updates with each player's move with current player playing as cross or circle detection.",
        " Victory detection using algorithms to detect rows, columns, and diagonals for a win.",
        "Game Draw detection if none of the players win and all nine blocks are filled.",
        "Confetti explosion to add a dash of celebration for winners.",
        "Reset game function to start a fresh game with same player connection.",
      ],
      live: "/tic-tac-toe",
      github: "https://github.com/swatimoluguri/tic-tac-toe",
    },
    {
      img: freshneeds,
      tech: ["React", "TailwindCSS", "Redux"],
      heading: "Food delivery app using Live Swiggy API.",
      details: [
        "Live Swiggy API for list of restaurants, menu and images fetch.",
        "Cart management using Redux Toolkit, App State persistence using Local storage.",
        "Search and Filter functionality by name, cuisine or ratings.",
        "Lazy Loading & Code Splitting for enhancing performance for an optimal user experience.",
        "Added the extra sparkle using Shimmer UI.",
        "Controlled components for form validations.",
        "Implemented conditional rendering, reusable components and dynamic data fetching based on routes to optimize performance.",
      ],
      live: "/freshneeds",
      github: "https://github.com/swatimoluguri/freshneeds2.0",
    },
  ];
  return (
    <div className="work-section">
      <Headings bg="purple" transparent="Work" heading="My" highlight="Work" />
      {project.map((item) => (
        <div key={item.heading} className="card">
          <div className="card-box">
            <div className="work-img">
              <img src={item.img} />
            </div>
            <div className="work-desc">
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
        </div>
      ))}
    </div>
  );
};
export default WorkCard;
