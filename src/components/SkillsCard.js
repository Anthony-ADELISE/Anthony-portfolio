import React from 'react';
import './SkillsCard.css';

function SkillCards({skill}) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCards;
