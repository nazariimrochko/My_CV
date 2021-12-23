import React from 'react';
import s from '../SectionLeft.module.css'

const About = (props) => {
    return (
        <section>
            <div>
                <h4 className={s.about_title}>About me</h4>
            </div>
            <div className={s.about_wrap}>
                <span className={s.from_title}>From : {props.store.general.live} Age : {props.store.general.age}</span>
                <p className={s.about_text}>{props.store.about.text}</p>
            </div>
        </section>
    );
};

export default About;
