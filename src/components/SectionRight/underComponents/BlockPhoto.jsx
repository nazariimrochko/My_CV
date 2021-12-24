import React from 'react';
import s from '../SectionRight.module.css'

const BlockPhoto = ({store}) => {
    return (
        <div className={s.box_photo}>
            <img className={s.photo} src={store.photo} alt="my-photo"/>
        </div>
    );
};

export default BlockPhoto;
