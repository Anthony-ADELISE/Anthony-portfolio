import React from 'react';
import { ProjectsData } from './data/ProjectsData';
import './Projects.css';
import ProjectsCard from './ProjectsCard';
import Separator from './Separator';

function Projects() {
    const data = ProjectsData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
           {data.map((project)=> {
               return <ProjectsCard project={project}/>
           })}
           </div>
        </div>
    )
}

export default Projects
