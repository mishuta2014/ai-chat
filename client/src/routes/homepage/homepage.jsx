import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypinStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbitalImg" />
      <div className="left">
        <h1>MISHUTA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eius
          aliquid quae voluptates laborum hic mollitia?
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgCont">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className="botImg" alt="" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: We produce food for Mice",
                2000,
                () => {
                  setTypinStatus("bot");
                },
                "Bot: We produce food for Hamsters",
                2000,
                () => {
                  setTypinStatus("human2");
                },
                "Human2: We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypinStatus("bot");
                },
                "Bot: We produce food for Chinchillas",
                2000,
                () => {
                  setTypinStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Services</Link>
          <span>|</span>
          <Link t="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
