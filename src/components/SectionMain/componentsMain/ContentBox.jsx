import React from 'react';
import s from "../SectionMain.module.css";

const ContentBox = ({content, active}) => {
    const {company, time, place, position, description,list} = content

    const contentList = list?.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link}>{item.name}</a>
            </li>
        )
    })

    return (
        <div className={active ? `${s.content} ${s.active}` : s.content}>
            <ol>{contentList}</ol>
            {company && <h4>{`${company} ${time}`}</h4>}
            {place && <h4>{`${place}${time}`}</h4>}
            {position && <span>{position}</span>}<br/>
            {description && <p>{description}</p>}
        </div>
    );
};

export default ContentBox;
