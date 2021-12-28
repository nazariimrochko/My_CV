import React from 'react';
import s from '../SectionMain.module.css'

const BlockEducation = ({store, active}) => {

    return (
        <div className={active ? `${s.content} ${s.active}` : s.content}>
            <h4>{store.description}</h4>
            <span className={s.from_title}>{store.position}</span><br/>
            {store.time&&<span>{store.time}</span>}
        </div>
    );
};
export default BlockEducation;


