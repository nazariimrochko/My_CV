import React from 'react';
import './BlockWork.css'

const BlockWorks = (props, active, setActive,) => {

    return (
                <div className={active ? 'content active' : 'content'}>
                    <h5 className='from_title'>{props.store.company} {props.store.time}</h5>
                    <span>{props.store.position}</span>
                    <p>{props.store.description}</p>
                </div>

    );
};

export default BlockWorks;
