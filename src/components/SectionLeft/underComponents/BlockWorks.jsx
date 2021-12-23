import React from 'react';
import s from '../SectionLeft.module.css'

const BlockWorks = (props) => {
    return (
        <div className={s.content}>
            <h5 className={s.from_title}>{props.store.company} {props.store.time}</h5>
            <span>{props.store.position}</span>
            <p>{props.store.description}</p>
        </div>
    );
};

export default BlockWorks;
