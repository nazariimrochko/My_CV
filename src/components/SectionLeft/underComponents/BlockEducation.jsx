import React from 'react';
import s from '../SectionLeft.module.css'

const BlockEducation = ({store, active}) => {
    return (
        <div className={active ? `${s.content} ${s.active}` : s.content}>
            <span>{store.description}</span><br/>
            <span>{store.time} | {store.place} </span>
            <h4 className={s.from_title}>{store.position}</h4>

        </div>
    );
};

export default BlockEducation;
