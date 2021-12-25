import React from 'react';
import s from '../SectionRight.module.css'

const SectionList = ({personInfo, active}) => {
    const dataList = personInfo.items

    let contentList = dataList.map((obj, index) => <li key={index}>{obj}</li>)

    return (
        <section className={active ? `${s.content_list} ${s.active}` : s.content_list}>
            <ul>{contentList}</ul>
        </section>
    );
};

export default SectionList;
