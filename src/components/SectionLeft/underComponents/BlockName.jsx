import React from 'react';
import s from '../SectionLeft.module.css'

const BlockName  = ({store}) => {
    return (
        <div className={s.box_name}>
            <h1 className={s.name}>{store.fullName}</h1>
            <h3>{store.profession}</h3>
        </div>
    );
};

export default BlockName;
