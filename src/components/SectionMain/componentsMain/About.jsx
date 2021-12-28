import React from 'react';
import s from '../SectionMain.module.css'

const About = ({store}) => {
    return (
        <section>
            <div>
                <h4 className={s.about_title}>About me</h4>
            </div>
            <div className={s.about_wrap}>
                <span className={s.from_title}>From : {store.general.live} Age : {store.general.age}</span>
                <p className={s.about_text}>{store.about.text}</p>
            </div>
        </section>
    );
};

export default About;
