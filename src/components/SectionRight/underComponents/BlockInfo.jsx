import React from 'react';
import s from '../SectionRight.module.css'
import {ImPhone} from "react-icons/im";
import {ImLinkedin2} from "react-icons/im";
import {ImMail} from "react-icons/im";

const BlockInfo = ({personInfo}) => {
    return (
        <div className={s.box_infomation}>
            <ul className={s.list_info}>
                <li><ImPhone className={s.svg}/>{personInfo.phone}</li>
                <li><ImMail className={s.svg}/>{personInfo.email}</li>
                <li>
                    <ImLinkedin2 className={s.svg}/>
                    <a href={personInfo.linkedInlink} target={'_blank'}>{personInfo.linkedIn}</a>
                </li>

            </ul>
        </div>
    );
};

export default BlockInfo;
