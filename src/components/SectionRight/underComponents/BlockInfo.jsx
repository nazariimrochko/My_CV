import React from 'react';
import s from '../SectionRight.module.css'

const BlockInfo = ({personInfo}) => {
    return (
        <div className={s.box_infomation}>
            <ul className={s.list_info}>
                <li>{personInfo.phone}</li>
                <li>{personInfo.email}</li>
                <li>
                    <a href={personInfo.linkedInlink} target={'_blank'}>{personInfo.linkedIn}</a>
                </li>
            </ul>
        </div>
    );
};

export default BlockInfo;
