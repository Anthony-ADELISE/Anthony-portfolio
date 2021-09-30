import React from 'react';
import './About.css';
import SocialContact from './SocialContact';

function About() {
    return (
        <div className="about">
           <div className="about-top">
                <div className="about-info">
                Hello tout le monde 👋🏾,  je m'appelle <br/> <span className="info-name">Anthony</span>. <br/> Je suis un développeur Web et fan de <br/> <span className="info-name">Football</span>.
                </div>
                <div className="about-photo">
                    <img 
                    alt="about pick"
                    src={require("../assets/images/Programmer.gif").default}
                    className="picture"/>
                </div>
           </div>
           <SocialContact />
        </div>
    )
}

export default About
