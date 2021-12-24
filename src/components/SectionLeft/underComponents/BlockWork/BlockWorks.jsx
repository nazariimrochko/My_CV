import React from 'react';
import './BlockWork.css'

const BlockWorks = ({store, active}) => {

    return (
                <div className={active ? 'content active' : 'content'}>
                    <h4 className='from_title'>{store.company} {store.time}</h4>
                    <span>{store.position}</span>
                    <p>{store.description}</p>
                </div>

    );
};

export default BlockWorks;
