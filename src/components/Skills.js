import React from "react";
import { SkillsData } from "./data/SkillsData";
import Separator from "./Separator";
import "./Skills.css";
import SkillsCard from "./SkillsCard";

function Skills() {
    const data = SkillsData;
  return (
    <div className="skills"> 
    <Separator />
      <label className="section-title">Skills</label>
        <div className="skills-container">
            {data.map((item)=>{
                return(
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map((skill) => {
                                return <SkillsCard skill={skill} />;
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Skills;
