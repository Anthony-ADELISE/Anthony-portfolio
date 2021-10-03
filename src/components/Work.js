import React from 'react';
import Separator from './Separator';
import './Work.css'
import WorkCard from './WorkCard';
import { WorkData } from './data/WorkData';

function Work() {
    const data = WorkData;
    return (
        <div className="work">
            <Separator />
            <label className="section-title">Works</label>
            <div className="work-list">
                {data.map((item)=>{
                    return <WorkCard item={item} />

                })}
            </div>
        </div>
    )
}

export default Work
