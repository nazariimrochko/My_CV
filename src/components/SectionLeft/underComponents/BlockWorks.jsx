import React from 'react';
import s from "../SectionLeft.module.css";

const BlockWorks = ({store, active}) => {

    return (
        <div className={active ? `${s.content} ${s.active}` : s.content}>
            <h4 className={s.from_title}>{store.company} {store.time}</h4>
            <span>{store.position}</span>
            <p>{store.description}</p>
        </div>
    );
};

export default BlockWorks;
