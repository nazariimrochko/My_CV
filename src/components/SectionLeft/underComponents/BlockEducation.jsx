import React from 'react';
import './BlockWork/BlockWork.css'

const BlockEducation = ({store, active}) => {
    return (
        <div className={active ? 'content active' : 'content'}>
            <span>{store.description}</span><br/>
            <span>{store.time} | {store.place} </span>
            <h4 className="from_title">{store.position}</h4>

        </div>
    );
};

export default BlockEducation;
