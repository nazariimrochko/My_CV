import React from 'react';
import s from '../SectionNav.module.css'

const SectionList = ({personInfo, active}) => {

    let contentList = personInfo.map((item, index) => <li key={index}>{item}</li>)

    return (
        <section className={active ? `${s.content_list} ${s.active}` : s.content_list}>
            <ul>{contentList}</ul>
        </section>
    );
};

export default SectionList;
