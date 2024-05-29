import photo from "../assets/photo.png";
import { ReactTyped } from "react-typed";
import ServicesTicker from "./ServicesTicker";

const Body = () => {
  return (
    <div className="body">
      <div className="banner">
        <div className="photo">
          <img src={photo} alt="logo-img" />
        </div>
        <div className="text-container">
          <span className="typed">►</span>
          <ReactTyped
            strings={[
              "Hello",
              "Namaste",
              "Hola",
              "Bonjour",
              "Hallo",
              "Konnichiwa",
              "Privet",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input type="text" />
          </ReactTyped>
          <p>
            I'm <span className="highlighted">Swati,</span>
          </p>
          <p>Software Developer</p>
        </div>
      </div>

      <div className="details">
        <ServicesTicker />
      </div>
    </div>
  );
};
export default Body;
