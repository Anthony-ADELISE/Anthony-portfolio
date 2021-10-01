import React from "react";
import "./About.css";
import SocialContact from "./SocialContact";
import Typewritter from "typewriter-effect";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h1>
            Hello👋🏾, Moi c'est <span className="info-name"> Anthony</span>.
            <br />Je suis un : <span className="info-name"><Typewritter 
            onInit={(typewriter) => {
                typewriter
                .typeString("Developper Web 💻.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Fan de football ⚽.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Fan de technologies 📱.")
                .start();
            }}
            /></span>
          </h1>
        </div>
        <div className="about-photo">
          <img
            alt="about pick"
            src={require("../assets/images/Programmer.gif").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
