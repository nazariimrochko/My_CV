import React from 'react';
import s from "../SectionMain.module.css";

const BlockProject = ({project, active}) => {
    let arrProject = project.list

    let listProject = arrProject.map((obj, index) => {
        return (
            <li key={index}>
                <a href={obj.link}>{obj.title}</a>
            </li>
        )
    })

    return (
        <div className={active ? `${s.content} ${s.active}` : s.content}>
            <span className={s.from_title}>Link to the site with mini-projects </span>
            <ol>{listProject}</ol>
        </div>
    );
};

export default BlockProject;
