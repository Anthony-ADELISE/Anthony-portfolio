import React from 'react';
import './WorkCard.css';

function WorkCard({ item }) {
    return (
        <div className="work-card">
            <img src={item.ecoleLogo} className="work-logo" alt="ecole logo"/>
            <div className="work-info">
                <label className="ecole-name">{item.ecole}</label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>     
        </div>
    )
}

export default WorkCard;
