import React from 'react';
import About from "./About";
import './Body.css';
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
